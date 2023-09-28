//CÓDIGO para ajustar as propriedades da webcam e acioná-la.
  Webcam.set({ //Webcam.set - é uma função de webcam.js para observar as propriedades para a visualização da webcam.
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });
  //obtemos o elemento HTML, no qual queremos mostrar a visualização da webcam e armazená-lo dentro de uma variável.
  camera = document.getElementById("camera");
//Desta vez, não acionamos a webcam dentro de uma função, apenas a escrevemos, logo,
//como resultado, assim que a página é carregada, a webcam será acionada, e receberá
//um popup pedindo por permissão.
Webcam.attach( '#camera' );//"Webcam.attach" que é uma função predefinida que ativa a webcam do usuário,
//---

//CÓDIGO para capturar a imagem.     
function takeSnapshot()
{   //Webcam.snap() é uma função predefinida de webcam.js utilizada para obter imagens
    //de uma webcam; essa função contém data_uri que pode ser utilizada para mostrar a
    //pré-visualização de uma imagem que está sendo gerada após a captura.
    Webcam.snap(function(data_uri) { //utilizaremos data_uri para exibir a imagem.
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
//---
  console.log('ml5 version:', ml5.version);
//Agora, importamos nosso modelo para o arquivo.
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);
//imageClassifier é uma função predefinida de ml5.js utilizada para acionar a função de classificação de imagem ml5.js.
//JavaScript Object Notation é um formato de arquivo de padrão aberto utilizado para 
//conter dados em um formato object. Você se lembra de que durante as aulas de API 
//visitamos o arquivo JSON em Json Viewer.
  function modelLoaded() {
    console.log('Model Loaded!');
  }
//--------------------------------------------------------------------------------      
//O propósito da função check() é obter a imagem capturada, passá-la para ml5.js, 
//fazer a comparação e chamar a função result.  
function check()
  {
    img = document.getElementById('captured_image'); //id="captured_image", é a id que fornecemos à tag img, que continha a imagem
    classifier.classify(img, gotResult);
  } // CLASSIFIER é a variável que contém o modelo que importamos no início do código ml5.js da última aula.
// CLASSIFY é uma função predefinida de ml5.js utilizada para comparar a imagem capturada com o modelo e obter os resultados.
// img: A imagem capturada
// gotResult: Uma função, para conter o resultado da comparação
function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("resultObjectName").innerHTML = results[0].label;
    document.getElementById("resultObjectAccuracy").innerHTML = results[0].confidence.toFixed(3);
  }//utilizaremos a função JS predefinida toFixed() que nos ajudará a reduzir o número após o decimal.
}







//URI: Uniform Resource Identifier

//URL: Uniform Resource Locator

//Um identificador de recurso uniforme ou URI é uma sequência exclusiva de caracteres que identifica uma imagem. Vamos usar o exemplo a seguir para gerar o URI de amostra. Vamos copiar a URL de um site carregado em seu navegador. Agora, vamos carregar o site dopiaza.org para gerar o URI. Cole o URL do site copiado no campo especificado e clique no botão "Gerar URI de dados". O link de URI de dados será gerado no campo de saída na seção na parte inferior da página. 

//Dica:
//URL- O objetivo é associar um endereço remoto com um nome de recurso na Internet. 
//URI - é o identificador do recurso. Pode ser uma imagem, uma página, etc, pois tudo o que está disponível na internet precisa de um identificador único para que não seja confundido.