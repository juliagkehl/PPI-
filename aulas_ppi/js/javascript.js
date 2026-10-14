//Comentario de uma linha

/*Comentario de varias linha*/

//Tres formas de declarar uma variavel (sem tipo)
//O var  o let se distinguem pelo escopo e declaracao
let nome = "Julia";
var sobreNome;

if (nome =="Julia"){
    sobreNome = "Kehl"
    let idade = 20;
    var pet ="lili & laila";
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
//Estrutura de repeticao while
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
    console.log(v1 + " index: " + index);
})

var itensChurrasco =[];
itensChurrasco.push("costela");
itensChurrasco.push("pão de alho");
itensChurrasco.push("linguiça");
itensChurrasco.push("pãozinho");

for (let i=0; i<itensChurrasco.lenght-1;i++){

}
itensChurrasco.forEach((e,i)=>{
console.log(i+ "-"+e);
});

//Array.forEach (() -{})

nome = "Julia Gabriely Kehl";
//como inverter string = 
console.log(nome.split("").reverse().join());
//a funcao split quebra a string,  'J', 'u', 'l', 'i', 'a', ' ', 'G', 'a', 'b', 'r','i', 'e', 'l', 'y', ' ','K', 'e', 'h', 'l'

itensChurrasco.map((e)=>{
    console.log(e.lenght);
});

//itens
itensChurrasco.filter((e)=> {
!(e== "pãozinho");console.log(e); return !e=="romops"});

//filter
console.log(itensChurrasco.filter((e,i)=> {
    return i!=3}));
    //filtra por qualquer elemento
console.log(itensChurrasco.filter((e,i)=> {
    return i!=2}));

    console.log(JSON.stringify(itensChurrasco));
    array2 = JSON.parse("[\"bla\", \"bla blar\"]")
    console.log(array2[1])