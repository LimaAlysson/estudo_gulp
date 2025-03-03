const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate')

function comprimeJs() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

gulp.task('comprimejs', comprimeJs);

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

gulp.task('sass', compilaSass);

function funcaoPadrao(callback) {
    setTimeout(function() {
        console.log('Função Padrão :::: Executando via Gulp');
        callback();
    }, 2000);
}

function soma(callback) {
    setTimeout(function() {
        console.log('Função Soma :::: 1 + 1 =  ', 1+1);
        dizTchau();
        callback();
    }, 5000);
}

function dizTchau() {
    console.log('Função Tchau :::: Tchau Gulp!')
}

// exports.default = gulp.series(funcaoPadrao, soma);
//exports.soma = soma;
//exports.default = gulp.parallel(funcaoPadrao, soma);

exports.sass = compilaSass;
exports.watch = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false}, gulp.series(compilaSass));
}

exports.comprimejs = comprimeJs;