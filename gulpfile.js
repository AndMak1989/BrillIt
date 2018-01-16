var path = require('path');
var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var concat = require('gulp-concat');


/*js compiler*/
gulp.task('js', function () {
    // gulp.src('js_test/*.js')
    //     .pipe(babel({
    //         presets: ['env']
    //     }))
    //     .pipe(concat('all.js'))
    //     .pipe(gulp.dest('js_test/ready'));
});
/*less compiler*/
gulp.task('less', function () {
    return gulp.src('./style/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'style', 'includes')]
        }))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(gulp.dest('./style'))
        .pipe(browserSync.stream({stream: true}));
});

/*server compiler*/
gulp.task('serve', ['less','js'], function () {

    browserSync.init({
        server: { // Определяем параметры сервера
            baseDir: './' // Директория для сервера
        },
        directory: true
    });

    gulp.watch('./style/**/*.less', ['less']);  ///  file and task
    gulp.watch('./js_test/**/*.js', ['js']);  ///  file and task
    gulp.watch("./*.html").on('change', browserSync.reload);
});

/*running task*/
gulp.task('run', ['serve']);