import gulp from 'gulp';
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';
import notify from 'gulp-notify';
import data from 'gulp-data';
import path from 'path';
import changed from 'gulp-changed';
import imagemin from 'gulp-imagemin'
import zip from 'gulp-zip';
import postcss from 'gulp-postcss';
import postcss_assets from 'postcss-assets';
import sourcemaps from 'gulp-sourcemaps';
const DEST = './';

/**
 * Server
 */
const server = browserSync.create();
const upLocalServer = (done) => {
	server.init({
		server: {
			baseDir: "./",
			index: "index.html"
		}
	});
	done();
};
const reloadBrowser = (done) => {
	server.reload();
	done();
};
/**
 * Pug
 */
const setPugOptions = (dest, src , is_build) => {
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

const buildPug = (done) => {
	let locals = {};
	gulp.src(['./dev/pug/**/*.pug', '!./dev/pug/**/_*.pug'])
	.pipe(changed(DEST))
	.pipe(plumber({
		errorHandler: notify.onError("Error: <%= error.message %>")
	}))
	.pipe(data(function(file) {
		locals = setPugOptions(file.path.replace(/.pug$/, '.html'),file.path);
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
	.on('end', gulp.series(reloadBrowser))
	.pipe(notify('compiled pug'));

	done();
};
/**
 * Postcss
 */
const buildPostcss = (done) => {
	gulp.src('dev/css/*.css')
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

	done();
};
/**
 * watch
 */
const watch = (done) => {
	buildPug(done);
	gulp.watch(['./dev/pug/**/*.pug', '!./dev/pug/**/_*.pug'], gulp.series(buildPug,reloadBrowser));
	gulp.watch(['dev/css/*.css'], gulp.series(buildPostcss,reloadBrowser));
	done();
}
/**
 * imgmin
 */
gulp.task('imgmin', () => {
	return gulp.src('./dev/images/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest('./build/images'));
});
/**
 * zip
 */
gulp.task('zip', () => {
	return gulp.src('build/**/*')
	.pipe(zip('build.zip'))
	.pipe(gulp.dest('./'));
});
/**
 * define default tasks
 */
gulp.task('default', gulp.series(upLocalServer,watch,reloadBrowser));
/**
 * build only
 */
gulp.task('build', gulp.series(buildPug,buildPostcss));
