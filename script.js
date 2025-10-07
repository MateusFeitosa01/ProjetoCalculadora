
const insert = (valor) =>{
    let display = document.getElementById('mostraResultado');
    let ultimo = document.getElementById('mostraResultado').innerHTML.slice(-1)
    const operadores = ['+', '-', '/', '*']

    if(operadores.includes(valor)){
        if(display.innerHTML == '' || operadores.includes(ultimo)){
            return;
        }
    }

    display.innerHTML += valor

}
const clean = () =>{
    document.getElementById('mostraResultado').innerHTML = "";
}
const back = () =>{
    let resultado = document.getElementById('mostraResultado').innerHTML;
    document.getElementById('mostraResultado').innerHTML = resultado.substring(0, resultado.length - 1);
}   
const result = () =>{
    let resultado = document.getElementById('mostraResultado').innerHTML;
    if(resultado){
        document.getElementById('mostraResultado').innerHTML = eval(resultado);
    }else{
        document.getElementById('mostraResultado').innerHTML = "Nada"
    }
}