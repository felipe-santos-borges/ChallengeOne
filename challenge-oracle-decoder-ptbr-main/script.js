
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/
/*
let titulo = document.querySelector('h2');
titulo.innerHTML = 'Mensagem Criptografada:';
*/


function exibirTextoTela(tag, texto) {
    let titulo = document.querySelector(tag);
titulo.innerHTML = texto;
    
}

exibirTextoTela('h2', 'mensagem porra');

/*function encriptar(texto){
        const chaveCri = {
        'a':'ai',
        'e':'enter',
        'i':'imes',
        'o':'ober',
        'u':'ufat'
    }
    let textoCriptgrafado = '';

    for (let letra of texto){
        if (chaveCri.hasOwnProperty(letra)){
            textoCriptgrafado += chaveCri[letra];
        }else{
            textoCriptgrafado += letra;
        }
    }
    return textoCriptgrafado;

}

function desincriptar(textoCriptgrafado){
    
      const chaveInvertida = {
        'ai':'a',
        'enter':'e',
        'imes':'i',
        'ober':'o',
        'ufat':'u'
      };

    for (const [chave,valor] of Object.entries(chaveCri)){
        chaveInvertida[valor] = chave;
    }

    let textoDescriptografado = '';   

    for (let letra of textoCriptgrafado){
        if (chaveInvertida.hasOwnProperty(letra)){
            textoDescriptografado += chaveInvertida[letra];
        }else{
            textoDescriptografado += letra;
        }
    }
    return textoDescriptografado;
}*/

function codifica(texto){
    let caracteres = texto.split("");
    caracteres.forEach(function(item, i) {
        if(item == 'a'){
            caracteres[i] = 'ai';
        }else if (item == 'e'){
            caracteres[i] = 'enter';
        }else if (item == 'i'){
            caracteres[i] = 'imes';
        }else if (item == 'o'){
            caracteres[i] = 'ober';
        }else if (item == 'u'){
            caracteres[i] =  'ufat';
        }
    });
    return caracteres.join("");
}

function decodifica(texto) {
    let codigo = [['a','ai'],['e','enter'],['i','imes'],['o','ober'],['u','ufat']];
    texto = texto;
    for (let i =0; i<codigo.length; i++){
        if(texto.includes(codigo[i][1])){
            texto = texto.replaceAll(codigo[i][1], codigo[i][0])
        }
    }
    return texto;
}

function encriptarTexto(){
   
    let textoOriginal = document.getElementById('input-texto').
   value;
   let textoCriptgrafado = codifica(textoOriginal);
   console.log(textoCriptgrafado);
   document.getElementById('msg').value = textoCriptgrafado;
   limparCampo('input[name="input-texto"]');
}

function copiaTexto(){
    /*
    let textoCriptgrafado = document.getElementById('msg').value;
    document.getElementById('input-texto').value = textoCriptgrafado
    limparCampo();
    */
   let textoCriptgrafado = document.getElementById('msg').value;
   document.getElementById('input-texto').value = textoCriptgrafado;
   console.log(textoCriptgrafado);
   limparCampo('input[name="msg"]');
}

function limparCampo(tag){
    document.querySelector(tag).value ="";
    
}


