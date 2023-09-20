function Hello(){

    alert("Ola Mundo")
    console.log("Ola Mundo");
}

function mostraNome(){
    let nome = prompt("Digite seu nome")
    console.log(nome)
    prompt(nome)
    
}

function concate(){
   let firstname = prompt("Digite a primeira palavra")
   let secondtname =   prompt("Digite a segunda palavra")
   let completname = firstname + secondtname
   prompt(completname)
   console.log(completname)
   console.log(firstname)
   console.log(secondtname)

}

function SomaNum(){
    let n1 = parseInt(prompt("Digite o primeiro número"))
    let n2 = parseInt(prompt("Digite o segundo número"))
    let resultado = n1 + n2 
    console.log(resultado)
    prompt(resultado)
}
    
    // let n1 = Number(prompt("Digite o primeiro número"))
    // let n2 = Number(prompt("Digite o segundo número"))

function SubtrairNum(n1,n2){
    let resultado = n1 - n2 
    console.log(resultado)
}

function CriaObj(){

    let idade = prompt("Qual sua idade?")
    let nome = prompt("Qual o seu nome?")
    let tf = prompt("Qual seu time favorito?")
    let usuario ={
        idade:idade,
        nome:nome,
        time:tf
    }

    console.log(usuario)

    // Outro modo de fazer
    // let usuario ={}
    
    // let idade = prompt("Qual sua idade?")
    // let nome = prompt("Qual o seu nome?")
    // let time = prompt("Qual seu time favorito?")
    //console.log(usuario)
}
    
function Calculadora(){
    let n1 = Number(prompt("Digite o primeiro número"))
    let n2 = Number(prompt("Digite o segundo número"))
    let op = prompt("Qual operação você deseja?")
    switch(op)
    {
        case "somar":{ console.log(n1 + n2)}
        break
    }

    switch(op)
    {
        case "subtrair":{ console.log(n1 - n2)}
        break
    }

    switch(op)
    {
        case "dividir":{ console.log(n1 / n2)}
        break
    }

    switch(op)
    {
        case "multiplicar":{ console.log(n1 * n2)}
        break
    }
}

function Constante(){

    let nome = prompt("Digite seu nome")
    const constante = nome
    console.log(constante)

}

function ManipulaArray(){
    let Cores = ["branco", "azul", "vermelho", "verde", "preto", "amarelo", "marrom", "violeta", "rosa", "ciano", "magenta", "cinza"];
    Cores.push('laranja');
    Cores.pop();
    Cores.sort();
    Cores.splice(1, 1);
    let tam = Cores.length;
    console.log("O tamanho do array é de: " + tam);
    console.log("primeira cor do array: " + Cores [0]);
    console.log("ultima cor do array: " + Cores [10])
    Cores.unshift('fucsia');
    Cores.shift();
    console.log(Cores);
}
    


