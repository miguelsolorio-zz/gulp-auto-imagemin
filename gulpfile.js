var gulp = require('gulp'),
    newer = require('gulp-newer'),
    wait = require('gulp-wait'),
    imagemin = require('gulp-imagemin');

var imgSrc = 'assets/*.png';
var imgDest = 'assets-opt/';

// Imagemin
gulp.task('images', function() {
  return gulp.src(imgSrc)
    .pipe(newer(imgDest))
    .pipe(wait(2000))
    .pipe(imagemin({
        optimizationLevel: 7,
        progressive: true,
        interlaced: true
    }))
    .pipe(gulp.dest(imgDest))
});

// Watch
gulp.task('watch', function() {
  gulp.watch(imgSrc, ['images'])
});

gulp.task('default', ['images', 'watch']);