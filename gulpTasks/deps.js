const gulp = require('gulp')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')

gulp.task('deps', ['deps.js', 'deps.css', 'deps.fonts'])

gulp.task('deps.js', function() {
  gulp.src([

    'bower_components/angular/angular.min.js',
    'bower_components/angular-animate/angular-animate.min.js',
    'bower_components/angular-bootstrap/ui-bootstrap.min.js',
    'bower_components/angular-filter/dist/angular-filter.min.js',
    'bower_components/angular-loader/angular-loader.min.js',
    'bower_components/angular-toastr/dist/angular-toastr.min.js',
    'bower_components/angular-ui-router/release/angular-ui-router.min.js',
    'bower_components/restangular/dist/restangular.min.js',
    'bower_components/bootstrap/dist/js/bootstrap.min.js',
    'bower_components/jquery/dist/jquery.min.js'
  ])
  .pipe(uglify())
  .pipe(concat('deps.min.js'))
  .pipe(gulp.dest('public/assets/js'))
})

gulp.task('deps.css', function() {

  gulp.src([
    'bower_components/angular-toastr/dist/angular-toastr.min.css',
    'bower_components/animate.css/animate.min.css',
    'bower_components/font-awesome/css/font-awesome.min.css',
    'bower_components/bootstrap/dist/css/bootstrap.min.css'
  ])

  .pipe(uglifycss({"uglyComments": true}))
  .pipe(concat('deps.min.css'))
  .pipe(gulp.dest('public/assets/css'))

})

gulp.task('deps.fonts', function() {

  gulp.src([
      'bower_components/font-awesome/fonts/*.*',
      'bower_components/bootstrap/fonts/*.*'
  ])
  .pipe(gulp.dest('public/assets/fonts'))

})
