var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');


gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});


gulp.task('sass', function () {
  return gulp.src('./demo.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./demo.sass', ['sass']);
});


gulp.task('demo', ["sass:watch", "webserver"]);
