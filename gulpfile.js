const gulp = require('gulp');
const imagemin = require("gulp-imagemin");
const imageresize = require("gulp-image-resize");
const newer = require("gulp-newer");
const rename = require("gulp-rename");
const sass = require ('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const postcss = require ('gulp-postcss');
const autoprefixer = require ('autoprefixer');
const cssnano = require ('cssnano');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const replace = require('gulp-replace');
const del = require('del');

// Here you get the file paths

// File paths
// const files = { 
    // scssPath: 'app/scss/**/*.scss',
    // jsPath: 'app/js/**/*.js'
// }

// transforms config
const large1 = {
    src: './app/images/large/*lo.jpg',
    dist: './dist/images/',
    params: {
      width: 1920,
      height: 654,
      crop: true
    }
  }
const large2 = {
    src: './app/images/large/*hi.jpg',
    dist: './dist/images/',
    params: {
      width: 3840,
      height: 1308,
      crop: true
    }
  }
  
const medium1 = {
    src: './app/images/medium/*lo.jpg',
    dist: './dist/images/',
    params: {
      width: 1380,
      height: 654,
      crop: true
    }
  }
const medium2 = {
    src: './app/images/medium/*hi.jpg',
    dist: './dist/images/',
    params: {
      width: 2760,
      height: 1308,
      crop: true
    }
  }
const small1 = {
    src: './app/images/small/*lo*.jpg',
    dist: './dist/images/',
    params: {
      width: 990,
      height: 654,
      crop: true
    }
  }
const small2 = {
    src: './app/images/small/*hi*.jpg',
    dist: './dist/images/',
    params: {
      width: 1980,
      height: 1308,
      crop: true
    }
  }
const smaller1 = {
    src: './app/images/smaller/*lo*.jpg',
    dist: './dist/images/',
    params: {
      width: 640,
      height: 654,
      crop: true
    }
  }
const smaller2 = {
    src: './app/images/smaller/*hi*.jpg',
    dist: './dist/images/',
    params: {
      width: 1280,
      height: 1308,
      crop: true
    }
  }
  
// image task

/**
* Copy original images
* - check if images are newer than existing ones
* - if they are, optimize and copy them
* - ignore (empty) directories
*/

function  imagecopy() {
  return gulp
  .src("./app/images/**/*", { nodir: true })
  .pipe(newer("./dist/images/"))
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{ removeViewbox: false}, { removeUselessStrokeAndFill: false }]
  }))
  .pipe(gulp.dest("./dist/images/"));

}
// copy image large1 size 1920x654
function  image_large1() {
  return gulp
  .src(large1.src, { nodir: true })
  .pipe(newer(large1.dist + "large"))
  .pipe(imageresize({
    width: large1.params.width,
    height: large1.params.height,
    crop: large1.params.crop,
    upscale: false
  }))
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{ removeViewbox: false}, { removeUselessStrokeAndFill: false }]
  }))
  // .pipe(rename({suffix: '-low'}))
  .pipe(gulp.dest(large1.dist + "large"));

}
// copy image large2 size 3840x1803
function  image_large2() {
  return gulp
  .src(large2.src, { nodir: true })
  .pipe(newer(large2.dist + "large"))
  .pipe(imageresize({
    width: large2.params.width,
    height: large2.params.height,
    crop: large2.params.crop,
    upscale: false
  }))
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{ removeViewbox: false}, { removeUselessStrokeAndFill: false }]
  }))
  // .pipe(rename({suffix: '-hi'}))
  .pipe(gulp.dest(large2.dist + "large"));

}

// copy image medium1 size 1380x654
function  image_medium1() {
  return gulp
  .src(medium1.src, { nodir: true })
  .pipe(newer(medium1.dist + "medium"))
  .pipe(imageresize({
    width: medium1.params.width,
    height: medium1.params.height,
    crop: medium1.params.crop,
    upscale: false
  }))
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{ removeViewbox: false}, { removeUselessStrokeAndFill: false }]
  }))
  .pipe(gulp.dest(medium1.dist + "medium"));

}
// copy image medium2 size 2760x1308
function  image_medium2() {
  return gulp
  .src(medium2.src, { nodir: true })
  .pipe(newer(medium2.dist + "medium"))
  .pipe(imageresize({
    width: medium2.params.width,
    height: medium2.params.height,
    crop: medium2.params.crop,
    upscale: false
  }))
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{ removeViewbox: false}, { removeUselessStrokeAndFill: false }]
  }))
  .pipe(gulp.dest(medium2.dist + "medium"));

}

// copy image small1 size 990x654
function  image_small1() {
  return gulp
  .src(small1.src, { nodir: true })
  .pipe(newer(small1.dist + "small"))
  .pipe(imageresize({
    width: small1.params.width,
    height: small1.params.height,
    crop: small1.params.crop,
    upscale: false
  }))
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{ removeViewbox: false}, { removeUselessStrokeAndFill: false }]
  }))
  .pipe(gulp.dest(small1.dist + "small"));

}
// copy image small2 size 1980x1308
function  image_small2() {
  return gulp
  .src(small2.src, { nodir: true })
  .pipe(newer(small2.dist + "small"))
  .pipe(imageresize({
    width: small2.params.width,
    height: small2.params.height,
    crop: small2.params.crop,
    upscale: false
  }))
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{ removeViewbox: false}, { removeUselessStrokeAndFill: false }]
  }))
  .pipe(gulp.dest(small2.dist + "small"));

}

// copy image smaller1 size 640x654
function  image_smaller1() {
  return gulp
  .src(smaller1.src, { nodir: true })
  .pipe(newer(smaller1.dist + "smaller"))
  .pipe(imageresize({
    width: smaller1.params.width,
    height: smaller1.params.height,
    crop: smaller1.params.crop,
    upscale: false
  }))
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{ removeViewbox: false}, { removeUselessStrokeAndFill: false }]
  }))
  .pipe(gulp.dest(smaller1.dist + "smaller"));

}
// copy image smaller2 size 1280x1308
function  image_smaller2() {
  return gulp
  .src(smaller2.src, { nodir: true })
  .pipe(newer(smaller2.dist + "smaller"))
  .pipe(imageresize({
    width: smaller2.params.width,
    height: smaller2.params.height,
    crop: smaller2.params.crop,
    upscale: false
  }))
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{ removeViewbox: false}, { removeUselessStrokeAndFill: false }]
  }))
  .pipe(gulp.dest(smaller2.dist + "smaller"));

}

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

//Copy normalize.css into app/scss folder
// function copy() {
  // return gulp
  // .src(['node_modules/normalize.css/normalize.css'])
  // .pipe(gulp.dest('app/scss/'));
// }

//Clean the dist folder
function clean() {
  return del ([
    "dist/"
  ]);
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
exports.clean = clean;
exports.imagecopy = imagecopy;


exports.images = gulp.series(
    image_large1,
    image_large2,
    image_medium1,
    image_medium2,
    image_small1,
    image_small2,
    image_smaller1,
    image_smaller2
);

exports.default = gulp.series(
    style,
    scripts,
    cacheBust,
    watch
);
