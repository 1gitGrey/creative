var gulp = require('gulp'),
	concat = require('gulp-concat'),
	coffee = require('gulp-coffee'),
	gutil = require('gulp-util'),
	compass = require('gulp-compass'),
	connect = require('gulp-connect'),
	browserify = require('gulp-browserify');

var htmlSources = ['micahgrey.html'];

var jsSources = ['js/*.js'];

gulp.task('js', function() {
	gulp.src(jsSources)
						.pipe(concat('js/script.js'))
						.pipe(browserify())
						.pipe(gulp.dest('js'))
						.pipe(connect.reload())
						    
	});


gulp.task('connect', function() {
	connect.server({
			root: './',
			livereload: true })
	});

gulp.task('watch', function() {
//	gulp.watch(coffeeSources, ['coffee']);
	gulp.watch(jsSources, ['js']);
	//gulp.watch('components/sass/*.scss', ['sass']);
	gulp.watch(htmlSources, ['html'])
	});

gulp.task('html', function() {
	gulp.src(htmlSources)
		.pipe(connect.reload())
	})
//gulp.task('build', ['js', 'sass']);

gulp.task('default', [ 'watch', 'connect']);
