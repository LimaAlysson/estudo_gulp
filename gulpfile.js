const gulp = require('gulp'); //importando o pacote gulp

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
// exports.soma = soma;

exports.default = gulp.parallel(funcaoPadrao, soma);