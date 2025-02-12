function insert(num) {
    
    document.querySelector('#identrada').value += num;
}

function clean() {

    document.querySelector('#identrada').value = ""
}

function back() {

    let resultado = document.querySelector('#identrada').value;
    document.querySelector('#identrada').value = resultado.substring(0, resultado.length - 1);
}

function calcular() {

    let resultado = document.querySelector('#identrada').value;
    if(resultado){
        document.querySelector('#identrada').value = eval(resultado)
    }

}