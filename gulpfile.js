const gulp = require('gulp'); //importando o pacote gulp

function funcaoPadrao(callback) {
    console.log('Função Padrão :::: Executando via Gulp');
    callback();
}

function soma(callback) {
    console.log('Função Soma :::: 1 + 1 =  ', 1+1);
    dizTchau();
    callback();
}

function dizTchau() {
    console.log('Função Tchau :::: Tchau Gulp!')
}

exports.default = gulp.series(funcaoPadrao, soma);
// exports.soma = soma;