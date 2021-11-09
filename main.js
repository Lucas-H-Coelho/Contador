//adicionando dados a uma variavel

var data = 0;

//imprimindo o padrão de um valor "0" na tag h2

document.getElementById("counting").innerText = data;

//criando uma função de incremento

function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
}

//criando uma função de decremento

function increment() {
    data = data - 1;
    document.getElementById("counting").innerText = data;
}
