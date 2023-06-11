const  gulp = require('gulp'),
       concat = require('gulp-concat'),
       prefix = require('gulp-autoprefixer'),
       sass = require('gulp-sass')(require('sass')),
       pug = require('gulp-pug'),
       livereload = require('gulp-livereload'),
       sourcemaps = require('gulp-sourcemaps');

//HTML task
// gulp.task('QR-code-html', function () {
//     return gulp.src('project/index.pug')
//         .pipe(pug({pretty: true}))
//         .pipe(gulp.dest('dist'))
//         // .pipe(livereload());
// });

// CSS task
gulp.task('QR-code-css', function () {
    return gulp.src('project/sass/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(prefix({cascade: false}))
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/assets/style'))
        // .pipe(livereload());
});

// JS task
gulp.task('QR-code-js', function () {
    return gulp.src('project/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/assets/js'))
        // .pipe(livereload());
});

//watch task
gulp.task('watch', function () {
    // livereload.listen();
    // require('./server.js');
    // gulp.watch('project/*.pug', gulp.series('QR-code-html'));
    gulp.watch('project/sass/**/*.scss', gulp.series('QR-code-css'));
    gulp.watch('project/js/*.j', gulp.series('QR-code-js'));
})

gulp.task('default', gulp.parallel('watch'));
