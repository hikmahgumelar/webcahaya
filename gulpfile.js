
var gulp    = require('gulp');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var clean   = require('gulp-clean');
var concat  = require('gulp-concat');



gulp.task('styles', function() {
  gulp.src('public/css/*')
  .pipe(cleanCss())
  .pipe(concat('style.css'))
  .pipe(gulp.dest('./public/'))
});

gulp.task('libs', function() {
  gulp.src('public/js/*')
  .pipe(uglify())
  .pipe(concat('libs.js'))
  .pipe(gulp.dest('./public/'))
});


var tasks = ['styles', 'libs'];

gulp.task('default', tasks);
