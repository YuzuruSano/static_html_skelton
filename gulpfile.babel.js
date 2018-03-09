import gulp from 'gulp';
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';
import watch from 'gulp-watch';
import browserSync from 'browser-sync';
import notify from 'gulp-notify';
import data from 'gulp-data';
import fs from 'fs';
import path from 'path';
import changed from 'gulp-changed';
import imagemin from 'gulp-imagemin'
import zip from 'gulp-zip';
import postcss from 'gulp-postcss';
import postcss_assets from 'postcss-assets';
import sourcemaps from 'gulp-sourcemaps';

const del = require('del');
const DEST = './';
const reload = browserSync.reload;

/* ===============================================
pug
=============================================== */
const pug_build_options = (dest, src , is_build) => {
	let depth = src[0].split('/').length;
	let page_prefix = './';
	let assets_prefix = './';
	if(is_build){
		assets_prefix = '';
	}
	let filedepth = depth - 2;
	for(let i = 0;i < filedepth;i++){
		page_prefix += '../';
		assets_prefix += '../';
	}
	return {
		from: src,
		to: dest,
		page_prefix:page_prefix,
		assets_prefix:assets_prefix,
		is_build:is_build
	};
};

gulp.task('pug', () => {
	let locals = {};
	//localsにこんな感じでpugにjsonを渡せる。
	//pug内で each d in data してループを回せる
	//https://pugjs.org/language/iteration.html
	// let locals = {
	// 	'data': JSON.parse(fs.readFileSync('dev/json/data.json'))
	// };
	return gulp.src(['./dev/pug/**/*.pug', '!./dev/pug/**/_*.pug'])
	.pipe(changed(DEST))
	.pipe(plumber({
		errorHandler: notify.onError("Error: <%= error.message %>")
	}))
	.pipe(data(function(file) {
		locals = pug_build_options(file.path.replace(/.pug$/, '.html'),file.path);
		return locals;
	}))
	.pipe(data(function(file) {
		locals.relativePath = path.relative(file.base, file.path.replace(/.pug$/, '.html'));
		return locals;
	}))
	.pipe(pug({
		locals: locals,
		pretty: true
	}))
	.pipe(gulp.dest("./"))
	.on('end', ()=>{
		gulp.start(['bs-reload']);
	})
	.pipe(notify('compiled pug'));
});
/* ===============================================
borwser-sync
=============================================== */
gulp.task('browser-sync', () => {
	browserSync({
		server: {
			baseDir: "./",
			index: "index.html"
		}
	});
	//ファイルの監視
	//以下のファイルが変わったらリロードする
	watch("build/js/*.js", function() {
		gulp.start('bs-reload');
	});
	watch("build/css/**/*.css", function() {
		gulp.start('bs-reload');
	});
	watch("build/images/**/*.*", function() {
		gulp.start('bs-reload');
	});
});

gulp.task('bs-reload', () => {
	browserSync.reload();
});

/* ===============================================
imgmin
=============================================== */
gulp.task('imgmin', () => {
	return gulp.src('./dev/images/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest('./build/images'));
});
/* ===============================================
zip
=============================================== */
gulp.task('zip', () => {
	return gulp.src('build/**/*')
	.pipe(zip('build.zip'))
	.pipe(gulp.dest('./'));
});
/* ===============================================
watch jade,pug postcss
=============================================== */
gulp.task('watch', () => {
	gulp.watch(['./dev/pug/**/*.pug', '!./dev/pug/**/_*.pug'], () => {
		gulp.start(['pug']);
	});

	gulp.watch(['dev/css/*.css'], () => {
		gulp.start(['postcss']);
	});
});
/* ===============================================
postcss
=============================================== */
gulp.task('postcss', () => {
	return gulp.src('dev/css/*.css')
	.pipe(plumber({
		errorHandler: notify.onError("Error: <%= error.message %>")
	}))
	.pipe(sourcemaps.init({loadMaps: true}))
	.pipe(
		postcss([
			require("postcss-assets")({
				loadPaths: ['build/images/'],
				relative:true,
				relative: './build/css'
			})
		])
	)
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('build/css/'));
});
/* ===============================================
default
=============================================== */
gulp.task('default', ['browser-sync', 'pug', 'watch']);
