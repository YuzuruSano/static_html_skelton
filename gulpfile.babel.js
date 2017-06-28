import gulp from 'gulp';
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';
import watch from 'gulp-watch';
import browserSync from 'browser-sync';
import notify from 'gulp-notify';
import data from 'gulp-data';
import path from 'path';
import changed from 'gulp-changed';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin'
import runSequence from 'run-sequence';
import zip from 'gulp-zip';
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

gulp.task('jade_to_pug', () => {
	gulp.src(['./pug/**/*.jade', './pug/**/_*.jade'])
	.pipe(changed(DEST))
	.pipe(plumber({
		errorHandler: notify.onError("Error: <%= error.message %>")
	}))
	.pipe(rename({extname: '.pug'}))
	.pipe(gulp.dest('tmp'))
	.on('end',()=>{
		gulp.start(['pug']);
	});
});

gulp.task('pug', () => {
	let locals = {};
	gulp.src(['./tmp/**/*.pug', '!./tmp/**/_*.pug'])
	.pipe(changed(DEST))
	.pipe(plumber({
		errorHandler: notify.onError("Error: <%= error.message %>")
	}))
	.pipe(data(function(file) {
		locals = pug_build_options(file.path.replace(/.pug$/, '.html'),file.path);
		return locals;
	}))
	.pipe(pug({
		locals: locals,
		pretty: true
	}))
	.pipe(gulp.dest("./"))
	.on('end', reload);
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
	//gulp.watch(['**/*.html','!node_modules/**/*.html','!bower_components/**/*.html'], ['bs-reload']);
	// gulp.watch("build/js/*.js", ['bs-reload']);
	// gulp.watch("build/css/**/*.css", ['bs-reload']);
	// gulp.watch("build/images/**/*.*", ['bs-reload']);
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
clean
=============================================== */
gulp.task('clean', () => {
	return del(['build']);
});
/* ===============================================
copy
=============================================== */
const copy = new Map([
	[ 'css',
		['css/style.min.css','css/style.min.css.map']
	],
	[ 'js',
		['js/*.js','js/*.js.map']
	]
]);
gulp.task('copy', () => {
	return copy.forEach((assets, dir) => {
		gulp.src(assets,{ base: dir })
		.pipe(gulp.dest('build/' + dir));
	});
});
/* ===============================================
imgmin
=============================================== */
gulp.task('imgmin', () => {
	return gulp.src('images/**/*')
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
watch jade,pug
=============================================== */
gulp.task('watch', () => {
	gulp.watch(['./pug/**/*.jade', '!./pug/**/_*.jade'], () => {
		gulp.start(['jade_to_pug']);
	});

	watch("js/*.js", function() {
		gulp.start('build');
	});
	watch("css/**/*.css", function() {
		gulp.start('build');
	});
	watch("images/**/*.*", function() {
		gulp.start('build');
	});
	// gulp.watch("js/*.js", ['build']);
	// gulp.watch("css/**/*.css", ['build']);
	// gulp.watch("images/**/*.*", ['build']);
});
/* ===============================================
task
=============================================== */
gulp.task('default', ['browser-sync', 'pug', 'build','watch']);
gulp.task('build', ()=>{
	return runSequence(
		'clean',
		'copy',
		'imgmin'
		//'zip'
	);
});
