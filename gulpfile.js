const gulp = require('gulp');
const sass = require ('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const postcss = require ('gulp-postcss');
const autoprefixer = require ('autoprefixer');
const cssnano = require ('cssnano');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const replace = require('gulp-replace');

// 

//compile scss into css
function style () {
  //path to scss file
  return gulp
  .src('app/scss/**/*.scss')
  //init sourcemaps
  .pipe(sourcemaps.init())
  //give it to sass compiler
  .pipe(sass())
  //give it to postcss, autoprefixer and cssnano
  .pipe(postcss([ autoprefixer(), cssnano() ]))
  //write sourcemaps in current directory
  .pipe(sourcemaps.write('.'))
  //destination path for css file
  .pipe(gulp.dest('dist/css'))
  //stream changes to all browser
  .pipe(browserSync.stream());
}

function scripts () {
  //path to java scripts
  return gulp
  .src('app/js/**/*js')
  //combine all js to one file
  .pipe(concat('all.js'))
  //minimize the js file
  .pipe(uglify())
  //destination path for js file
  .pipe(gulp.dest('dist/js'))
  //stream changes to all browser
  .pipe(browserSync.stream());
}

// Cachebust
var cbString = new Date().getTime();
function cacheBust(){
    return gulp
        .src(['index.html'])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
        .pipe(gulp.dest('.'));
}

//watch files
function watch () {
  browserSync.init({
    notify: false,
    server: {
      baseDir: './'
    }
  });
  gulp.watch('app/scss/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('app/js/**./js').on('change', browserSync.reload);
}

exports.style = style;
exports.scripts = scripts;
exports.watch = watch;

exports.default = gulp.series(
    style,
    scripts,
    cacheBust,
    watch
);
