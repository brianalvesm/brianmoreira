'use strict';

const gulp = require('gulp'),
	sass = require('gulp-sass'),
	notify = require('gulp-notify'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	cleanCSS = require('gulp-clean-css'),
	autoprefixer = require('gulp-autoprefixer'),
	pipeline = require('readable-stream').pipeline;

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./public/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets/'));
});
 
gulp.task('minify-css', () => {
  return gulp.src('./public/stylesheets/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('./public/stylesheets/dist/'));
});

gulp.task('compress', function () {
  return pipeline(
    gulp.src('./public/js/**/*.js'),
    uglify(),
    concat('scripts.min.js'),
    gulp.dest('./public/js/dist/')
  );
});

gulp.task('watch', function () {
  gulp.watch('./public/sass/**/*.sass', gulp.series('sass'));
});

gulp.task('default', gulp.series('watch', 'sass', 'minify-css', 'compress'));