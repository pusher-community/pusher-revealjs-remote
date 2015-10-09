var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var ghPages = require('gulp-gh-pages');
var runSequence = require('run-sequence');

gulp.task('clean', function (cb) {
  return gulp.src('dist/')
             .pipe(clean());
});

gulp.task('build', function(cb) {
  runSequence('clean',
              'build-remote', 'build-slides', 'build-example',
              cb);
});

gulp.task('build-remote', function() {
  return gulp.src(__dirname + '/src/client-remote/index.js')
             .pipe(concat('pusher-revealjs-remote.js'))
             .pipe(gulp.dest(__dirname + '/dist/js/'));
});

gulp.task('build-slides', function() {
  return gulp.src(__dirname + '/src/client-slides/index.js')
             .pipe(concat('pusher-revealjs-slides.js'))
             .pipe(gulp.dest(__dirname + '/dist/js/'));
});

gulp.task('build-example', function() {
  return gulp.src(__dirname + '/example/**/*')
             .pipe(gulp.dest(__dirname + '/dist/example/'));
});

gulp.task('deploy', ['build'], function() {
  return gulp.src(__dirname + '/dist/**/*')
    .pipe(ghPages());
});
