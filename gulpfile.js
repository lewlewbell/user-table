var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Compile sass into CSS and then auto inject it to browser
gulp.task('sass', function () {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

// Move JS files into our /src/js folder
gulp.task('js', function () {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
});

// Static Server / watching our scss and html files
gulp.task('serve', ['sass'], function () {

    browserSync.init({
        server: "./src"
    });

    // Bootstrap files are watched, however it should be noted
    // that everytime you modify the boostrap base, god kills a kitten!
    // We should always extend upon the base where possible
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['js', 'serve']);
