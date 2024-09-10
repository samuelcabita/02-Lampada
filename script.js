const LinkLigada = './img/ligada.jpg';
const LinkDesligada = './img/desligada.jpg';
const LinkQuebrada = './img/quebrada.jpg';
const botaoGrupo = document.querySelectorAll('button');
const imagem = document.querySelector('img');

 function Ligar(){
    imagem.src=LinkLigada;
 };
 function Desligar(){
  imagem.src=LinkDesligada
 }
 function Quebrada(){
    imagem.src=LinkQuebrada;
 }
imagem.addEventListener('mouseover',()=>{
    imagem.src=LinkLigada
});
imagem.addEventListener('mouseout',()=>{
    imagem.src=LinkDesligada;
});
imagem.addEventListener('click',Quebrada);
botaoGrupo[0].addEventListener('click',Ligar);
botaoGrupo[1].addEventListener('click',Desligar);