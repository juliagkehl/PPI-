let h1titulo = document.getElementById("titulo");
h1titulo.innerHTML = "i6 2026";

let h1 = document.createElement("h1");
h1.innerHTML = "oi";
document.body.appendChild(h1);

let inputPeso=document.getElementById("iPeso");
let inputAltura = document.getElementById("iAltura");
let calcular = document.querySelector("#botao");

let pimc = document.querySelector("#IMC");

let peso = Number.parseFloat(inputPeso.value); // inputPeso.value;
console.log(typeof (peso));
let altura = Number.parseFloat(inputAltura.value);


botao.addEventListener("click", () => {
    let imc = peso / (altura * altura);
console.log(imc);

    console.log(imc);
    result = document.createElement("p");
    pimc.innerHTML = imc;
});
