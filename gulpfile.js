const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

// Compile SASS
gulp.task('sass', () => {
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('public/stylesheets'))
    .pipe(browserSync.stream());
});

// Minify css
gulp.task('mincss', () => {
    gulp.src('public/stylesheets/main.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/stylesheets/dist/'));
});

// Move JS Files to src/js
gulp.task('js', () => {
  return gulp.src([
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/popper.js/dist/umd/popper.min.js'
  ])
    .pipe(gulp.dest('public/scripts'))
    .pipe(browserSync.stream());
});

// Move Fonts Folder to src
gulp.task('fonts', () => {
  return gulp.src('node_modules/font-awesome/fonts/*')
   .pipe(gulp.dest('public/fonts'));
});

// Move Font Awesome CSS to src/css
gulp.task('fa', () => {
  return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('public/stylesheets'));
});

// default gulp task
gulp.task('default', ['sass', 'js', 'fonts', 'fa', 'mincss']);
