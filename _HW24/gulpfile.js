const { series, src, dest, watch } = require('gulp');
var concat = require('gulp-concat');
var inject = require('gulp-inject');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

function concatTask(cb){
    src('./src/script/*.js')
        .pipe(concat('main.js'))
        .pipe(dest('./dist/script'));
    cb();
}

function sassTask(cb){
    src('./src/assets/scss/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(dest('./dist/css/'));
    cb();
}

function injectTask(cb){
    var target = src('./src/index.html');
    var sources = src(['./dist/**/*.js', './dist/**/*.css'], {read: false});
    
    target.pipe(inject(sources, {
        // relative: true
        transform: function (filepath){
            let newPath = filepath.replace('/dist/', '');
            let extention = filepath.split('.')[1];
            return extention == 'js' ? `<script src="${newPath}"></script>` : `<link rel="stylesheet" href="${newPath}"></link>`
        }
    }))
    .pipe(dest('./dist/'))

    cb();
}


module.exports.concat = concatTask;
module.exports.sass = sassTask;
module.exports.inject = injectTask;