const { series, src, dest, watch } = require('gulp');

function copyTask(cb){
    console.log('copy');
    src('./src/index.html')
        .pipe(dest('dist/'));
    cb();
}

function devTask(){
    watch('src/**/*.*', {}, function(cb){
        src('./src/index.html')
            .pipe(dest('dist/'));
        cb();
    })
}

function minifyTask(cb){
    console.log('minify')
    cb();
}

function defaultTask(cb){
    console.log('test test');

    cb()
}

module.exports.default = defaultTask;

module.exports.build = series(copyTask, minifyTask);

module.exports.dev = devTask