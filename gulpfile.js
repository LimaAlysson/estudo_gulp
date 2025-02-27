function funcaoPadrao(callback) {
    console.log('Executando via Gulp');
    callback();
}

function soma(callback) {
    console.log('soma: ', 1+1);
    dizTchau();
    callback();
}

function dizTchau() {
    console.log('Tchau Gulp!')
}

exports.default = funcaoPadrao;
exports.soma1 = soma;