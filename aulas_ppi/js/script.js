console.log(window.screen);

window.document.body.innerHTML= "<h1>olá!</h1>"
document.body.style.backgroundColor= "#ffc1d5"

let div = document.createElement("div");
let pnome = document.createElement("p");
let peso =  document.createElement("p");
let altura = document.createElement("p");

//nome
document.body.appendChild(div);
temp=document.createElement("label")
temp.innerHTML="nome"
div.appendChild(temp);
temp=document.createElement("input")
temp.id="inputNome"
div.appendChild(temp);

//peso
div.appendChild(document.createElement("br"))
temp=document.createElement("label")
temp.innerHTML="peso"
div.appendChild(temp);
temp=document.createElement("input")
temp.id="inputPeso"
div.appendChild(temp);

//Altura
div.appendChild(document.createElement("br"))
temp=document.createElement("label")
temp.innerHTML="altura"
div.appendChild(temp);
temp=document.createElement("input")
temp.id="inputAltura"
div.appendChild(temp);

//botao
div.appendChild(document.createElement("br"))
tmp=document.createElement("button");
tmp.id = "botaoCalcular";
tmp.innerHTML = "calcular";
div.append(tmp);

tmp.addEventListener("click", ()=>{
    inputPeso=document.getElementById("inputPeso");
    inputAltura=document.getElementById("inputAltura");
peso = Number.parseFloat(inputPeso.value);
altura = Number.parseFloat(inputAltura.value);
    imc = peso/(altura*altura);
    console.log(imc)
    result=document.createElement("p");
    result.innerHTML=imc;

    div.appendChild(result);
})

