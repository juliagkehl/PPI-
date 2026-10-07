//Comentario de uma linha

/*Comentario de varias linha*/

//Tres formas de declarar uma váriavel (sem tipo)
//O var  o let se distinguem pelo escopo e declaração
let nome = "Julia";
var sobreNome;

if (nome =="Julia"){
    sobreNome = "Kehl"
    let idade = 20;
    var pet ="lili  laila";
     console.log("nome: " + nome + " sobrenome: " + sobreNome + " idade: " + idade + " pet: " + pet);
   
}
let idade = 20;
// console.log("nome: " + nome + "sobrenome: " + sobreNome + "idade: " + idade + "pet: " + pet);

//Estruturas de seleção no JS
if (nome =="Julia"){
    console.log("nome: " + nome)
} else{
    console.log("nome: " + "ju");
}
peso = 80
altura = 1.77;
imc= peso/(altura*altura)
//Classificacao do IMC

if(imc<18.5){
    console.log("Abaixo do peso")
}
else if (imc>= 18.5 && imc <25){
    console.log("Peso normal")
}
else if (imc>=25 && imc<30){
    console.log("Acima do peso")
}
else if (imc>=30 && imc<35){
    console.log("Obesidade grau 1")
}
else if (imc>=35 && imc<40){
    console.log("Obesidade grau 2")
}
else if (imc>=40){
    console.log("Obesidade grau 3")
}

//Switch case estrutura de seleção
a =2 
switch(a){
    case 1: console.log("A"); break;
    case 2: console.log("B"); break;
    case 3: console.log("C"); break;
    default: console.log("D");
}
//Switch com expressao
switch(a){
    case a**a==4: console.log("A"); break;
    case a==2 : console.log("B"); break;
    case 3==3: console.log("C"); break;
    default: console.log("D");
}
//Estrutura de repetição while
let i=0;
while(i<5){
    console.log(i);
    i++;
}

//for
for(let i=0; i<5;i++){
    console.log(i);
}

//arrays
let frutas = ["morango", "banana", "manga", "kiwi"];
frutas.forEach((v1, index) =>{
    console.log(v1 + "index: " + index);
})