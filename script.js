const btnIncrementar$ = document.getElementById("btn_incrementar");

const btnDecrementar$ = document.getElementById("btn_decrementar");

const btnReset$ = document.getElementById("btn_reset");

const p$ = document.getElementById("contador");


    let contador = 0;
     
    p$.innerHTML = contador;

    btnIncrementar$.addEventListener("click", function(){
        contador;

        p$.innerHTML = ++contador;
    });

    btnDecrementar$.addEventListener("click", function(){
        contador;

        p$.innerHTML = --contador;
    });

    btnReset$.addEventListener("click", function(){
        contador;

        p$.innerHTML = contador = 0;
    });
