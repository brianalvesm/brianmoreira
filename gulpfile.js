'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./stylesheets/'));
});

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.sass', gulp.series('sass'));
});

gulp.task('default', gulp.series('watch', 'sass'));