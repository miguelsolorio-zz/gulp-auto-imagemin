var gulp = require('gulp'),
    newer = require('gulp-newer'),
    imagemin = require('gulp-imagemin');

var imgSrc = 'assets/*';
var imgDest = '_optimized';

// Imagemin
gulp.task('images', function() {
  return gulp.src(imgSrc)
    .pipe(newer(imgDest))
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