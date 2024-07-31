
var somatorio = 0;
var cont = 0;

/***********Funcao ao apertar botao************/
let botao = document.querySelector("#btn_adicionar");
botao.addEventListener("click", ()=>{
    let nota = document.querySelector("#entrada_nota");
    if(nota.value === ""){
        alert("Por favor, insira uma nota.")
        return
    }

    let valorNota = parseFloat(nota.value);

    if (isNaN(valorNota)) {
        alert("O valor inserido tem que ser um número válido!");
        return;
    }

    if(valorNota>10 || valorNota<0){
        alert("A nota digitada é invalida, por favor, digite uma nota valida.");
        return
    }

    let campo_mensagem = document.querySelector("#campo_mensagem");
    let div = document.createElement("div");
    let p = document.createElement("p");
    console.log(typeof(valorNota))
    somatorio = somatorio + parseFloat(nota.value);
    console.log(somatorio)
    cont++;
    p.innerHTML = "A nota " + cont + " foi " + nota.value;
    div.append(p);
    campo_mensagem.append(div);
})


let botaoMedia = document.getElementById("btn_calcular");
botaoMedia.addEventListener("click", ()=>{
    let texto_media = document.getElementById("texto_resultado");
    if(cont == 0){
        texto_media.innerText = "A média é: " + 0;
    }else{
        let media = somatorio / cont;
        texto_media.innerText = "A média é: " + media;
    }
})