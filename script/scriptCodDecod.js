let fraseCriptografada;
let fraseDescriptografada;

function imprimirTxtTESTE(texto){
    console.log(texto);
}

function criptografar(frase){
    let codificacao = frase
    .replace(/e/g , "enter")
    .replace(/i/g , "imes")
    .replace(/a/g , "ai")
    .replace(/o/g , "ober")
    .replace(/u/g , "ufat");
    fraseCriptografada = codificacao;
 }

 function descriptografar (frase){
    let descodificacao = frase
    .replace(/ufat/g,"u")
    .replace(/ober/g,"o")
    .replace(/ai/g,"a")
    .replace(/imes/g,"i")
    .replace(/enter/g,"e");
    fraseDescriptografada = descodificacao;
    
 }

 function verificarAcentoEMaiuscula(texto){
    let temMaiuscula = /[A-Z]/;
    let temAcento = /[ÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜÇáéíóúàèìòùâêîôûãõäëïöüç]/;
    let temcharEspeciais = /[~`@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/; // "!"" não entra no critério pois a mensagem de teste Alura aceita o ponto de exclamação
    return temMaiuscula.test(texto) || temAcento.test(texto) || temcharEspeciais.test(texto);
 }



/*****************************************************************************************/

//CRIPTOGRAFAR
document.getElementById("btn-crip").addEventListener("click", function(){
    let textoHtml = document.getElementById("textoInput").value;

    if (textoHtml === "") {
        alert("A mensagem está vazia!");
        return;
    }

    if(verificarAcentoEMaiuscula(textoHtml)){
        alert("O texto contém letras maiúsculas, acentuadas ou  caracteres especiais. Por favor, remova-os.");
        return;
    }

    criptografar(textoHtml);
    imprimirTxtTESTE(fraseCriptografada);

    let retanguloDIV = document.getElementById("ret-msg");
    let divContainerRet = document.querySelector(".divContainerRet");
    

    if(!divContainerRet){
        divContainerRet = document.createElement("div");
        divContainerRet.classList.add("divContainerRet");
        
        let paragrafo = document.createElement("p");
        paragrafo.classList.add("paragrafoRet");
        divContainerRet.appendChild(paragrafo);

        let btnCopiar = document.createElement("button");
        btnCopiar.textContent = "Copiar";
        btnCopiar.classList.add("botaoRetCopiar");
        divContainerRet.appendChild(btnCopiar);

        retanguloDIV.appendChild(divContainerRet);

        // logica do botao copiar
        btnCopiar.addEventListener("click", function(){
            let textoParaCopiar = paragrafo.textContent; 
            navigator.clipboard.writeText(textoParaCopiar).then(function() {
                console.log('Texto copiado');
                paragrafo.classList.add("transparent"); // "apagar" a mensagem  
            }).catch(function(err) {
                console.error('Erro ao copiar texto: ', err);
            });
        });



    }
    
    let paragrafo = divContainerRet.querySelector(".paragrafoRet");
    paragrafo.textContent = fraseCriptografada;
    paragrafo.classList.remove("transparent"); // Voltar a opacidade assim que acionado novamente
    document.getElementById("textoInput").value = "";
    

});


//DESCRIPTOGRAFAR
document.getElementById("btn-descrip").addEventListener("click", function(){
    let textoHtml = document.getElementById("textoInput").value;

    if (textoHtml === "") {
        alert("A mensagem está vazia!");
        return;
    }

    if(verificarAcentoEMaiuscula(textoHtml)){
        alert("O texto contém letras maiúsculas, acentuadas ou  caracteres especiais. Por favor, remova-os.");
        return;
    }


    descriptografar(textoHtml);
    imprimirTxtTESTE(fraseDescriptografada);

    let retanguloDIV = document.getElementById("ret-msg");
    let divContainerRet = document.querySelector(".divContainerRet");
    

    if(!divContainerRet){
        divContainerRet = document.createElement("div");
        divContainerRet.classList.add("divContainerRet");
        
        let paragrafo = document.createElement("p");
        paragrafo.classList.add("paragrafoRet");
        divContainerRet.appendChild(paragrafo);

        let btnCopiar = document.createElement("button");
        btnCopiar.textContent = "Copiar";
        btnCopiar.classList.add("botaoRetCopiar");
        divContainerRet.appendChild(btnCopiar);

        retanguloDIV.appendChild(divContainerRet);


         // // logica do botao copiar
         btnCopiar.addEventListener("click", function(){
            let textoParaCopiar = paragrafo.textContent;  
            navigator.clipboard.writeText(textoParaCopiar).then(function() {
                console.log('Texto copiado');
                paragrafo.classList.add("transparent");  // "apagar" a mensagem  
            }).catch(function(err) {
                console.error('Erro ao copiar texto: ', err);
            });
        });
    }
    
    let paragrafo = divContainerRet.querySelector(".paragrafoRet");
    paragrafo.textContent = fraseDescriptografada;
    paragrafo.classList.remove("transparent");// Voltar a opacidade assim que acionado novamente
    document.getElementById("textoInput").value = "";
    
});





