/*
* Dependencias
*/

var gulp = require('gulp'),
  	uglify = require('gulp-uglify'),
  	sass  = require('gulp-sass'),
    livereload = require('gulp-livereload');

/*
* Configuración de la tarea 'demo'
*/

gulp.task('sass', function () {  
    gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

gulp.task('scss-lint', function() {
  gulp.src('scss/*.scss')
    .pipe(scsslint());
});

gulp.task('js', function () {
  	gulp.src('js-source/*.js')
  		.pipe(uglify())
  		.pipe(gulp.dest('js'))
});

gulp.task('default', ['sass', 'js'], function(){ 
  livereload.listen();
  gulp.watch('scss/*.scss', ['sass']).on('change', livereload.changed);
  gulp.watch('js-source/*.js', ['js']).on('change', livereload.changed);
});
