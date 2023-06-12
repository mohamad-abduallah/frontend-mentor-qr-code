const  gulp = require('gulp'),
       concat = require('gulp-concat'),
       prefix = require('gulp-autoprefixer'),
       sass = require('gulp-sass')(require('sass')),
       pug = require('gulp-pug'),
       livereload = require('gulp-livereload'),
       sourcemaps = require('gulp-sourcemaps'),
       uglify = require('gulp-uglify'),
       notify = require("gulp-notify"),
       zip = require('gulp-zip');
       // ftp = require( 'vinyl-ftp' );

//HTML task
// gulp.task('QR-code-html', function () {
//     return gulp.src('project/index.pug')
//         .pipe(pug({pretty: true}))
//         .pipe(gulp.dest('dist'))
//         // .pipe(livereload());
// });

// CSS task
// {outputStyle: 'compressed'} add inside the sass() css to pressure the code
gulp.task('QR-code-css', function () {
    return gulp.src('project/sass/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefix({cascade: false}))
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/assets/style'))
        .pipe(notify('QR-code-css tag is done'))
        // .pipe(livereload());
});

// JS task
gulp.task('QR-code-js', function () {
    return gulp.src(['project/js/*.js', '!project/js/two.js']) // the tow.js file i don't want to add
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(notify('QR-code-js tag is done'))
        // .pipe(livereload());
});

//compress Files
// gulp.task('compress', function () {
//     return gulp.src('dist/**/*.*')
//         .pipe(zip('QR-code.zip'))
//         .pipe(gulp.dest('.'))
//         .pipe(notify('Files is compressed'))
// })

//watch task
gulp.task('watch', function () {
    // livereload.listen();
    // require('./server.js');
    // gulp.watch('project/*.pug', gulp.series('QR-code-html'));
    gulp.watch('project/sass/**/*.scss', gulp.series('QR-code-css'));
    gulp.watch('project/js/*.js', gulp.series('QR-code-js'));
    // gulp.watch('dist/**/*.*', gulp.series('compress'));

})
gulp.task('default', gulp.parallel('watch'));
