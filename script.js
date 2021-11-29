const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
const btn = document.querySelector('#show-or-hide');
const specifications= document.querySelector('.product-specifications-wrapper');


/*----------------------------Evento nos botões ------------------------*/

menuBtn.onclick = ()=>{
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
cancelBtn.onclick = ()=>{
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ffc107";
}
searchBtn.onclick = ()=>{
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}

btn.onclick = () =>{
  if(specifications.style.display === 'block'){
    specifications.style.display ='none';
  
  }else {
    specifications.style.display = 'block';
  }
  
}
/*-------------------------Trocar imagem do produto-------------------------*/
function TrocarImg(img){
   
  document.getElementById('image1').src = img
  
}
/*---------------------------Trocar preco de acordo com a cor selecionada----------------*/
function TrocarPreco(){
  var color;
  color = document.getElementById('product-color').value; 
  console.log(color);

    if(color === "CELXMI11B128"){
      document.getElementById("was-price").innerHTML = "R$ 2.599,00";
      document.getElementById("is-price").innerHTML = "R$ 2.400,00";
      document.getElementById("name-color").innerHTML = "Cor - Branco";
      document.getElementById("parcela").innerHTML ="Em até 10x de R$ 240,00 sem juros";

     

    }else if(color ==="CELXMI11C128"){
      document.getElementById("was-price").innerHTML = "R$ 2.599,00";
      document.getElementById("is-price").innerHTML = "R$ 2.400,00";
      document.getElementById("name-color").innerHTML = "Cor - Cinza";
      document.getElementById("parcela").innerHTML ="Em até 10x de R$ 240,00 sem juros";
      

    }else{
      document.getElementById("was-price").innerHTML = "R$ 2.699,00";
      document.getElementById("is-price").innerHTML = "R$ 2.500,00";
      document.getElementById("name-color").innerHTML = "Cor - Preto";
      document.getElementById("parcela").innerHTML ="Em até 10x de R$ 250,00 sem juros";
      
    }
 
}


/*-----------------------Criação do slider-----------------*/

$(document).ready(function () {
  $('.container-card').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  /*slidesToShow: 3,
  dots: true,
  centerMode: true,
  arrows: true*/
});
});

 



