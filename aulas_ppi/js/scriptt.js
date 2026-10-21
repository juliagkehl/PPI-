let h1titulo = document.getElementById("titulo");
h1titulo.innerHTML = "i6 2026";

let h1 = document.createElement("h1");
h1.innerHTML = "oi";
document.body.appendChild(h1);

let inputPeso=document.getElementById("iPeso");
let inputAltura = document.getElementById("iAltura");
let calcular = document.querySelector("#botao");
let imagem=document.getElementById("#imagem")
let  d = document.querySelector("#descricao")

let pimc = document.querySelector("#IMC");

let peso = Number.parseFloat(inputPeso.value); // inputPeso.value;
console.log(typeof (peso));
let altura = Number.parseFloat(inputAltura.value);


calcular.addEventListener("click", () =>{

let peso = Number.parseFloat(inputPeso.value)
console.log(typeof(peso))
let altura = Number.parseFloat(inputAltura.value)

let imc = peso/ (altura*altura)
console.log(imc)
pimc.innerHTML = imc


if(imc < 18.5 ){
    d.innerHTML = "Abaixo peso"
    img.innerHTML = '<img src= "../aulas_ppi/img/abaixopeso.png" >'
}
if(imc >= 18.5 && imc < 25){
    d.innerHTML ="peso normal"
     imagem.innerHTML = '<img src= "../aulas_ppi/img/normal.png" >'

} else if(imc>=25 && imc <30){
   d.innerHTML ="Sobrepeso"
    imagem.innerHTML = '<img src= "../aulas_ppi/img/sobrepeso.png" >'
}
 else if(imc>=30 && imc <35){
   d.innerHTML ="Obesidade grau I"
    imagem.innerHTML = '<img src= "../aulas_ppi/img/obesidade1.png" >'
 }

 else if(imc>=35 && imc <40){
  d.innerHTML =" Obesidade grau II "
  imagem.innerHTML = '<img src= "../aulas_ppi/img/obesidade2.png" >'
 }
 else if( imc > 40){
    d.innerHTML =" Acima de 40: Obesidade grau III "
    imagem.innerHTML = '<img src= "../aulas_ppi/img/obesidade3.png" >'
 }

 });

 

