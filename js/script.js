window.onscroll = function(){

    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if (scroll > 20){
        header.classList.add('nav_mod');
    }else if(scroll < 20){
        header.classList.remove('nav_mod');
    }

}

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

menu = document.getElementById("header");
body = document.getElementById("container_all");
nav = document.getElementById("nav");

function mostrar_menu(){
    
    menu.classList.toggle('move_content');
    body.classList.toggle('move_content');
    nav.classList.toggle('move_nav');
}


window.addEventListener("resize", function(){

    if(window.innerWidth > 760){
        menu.classList.remove('move_content');
    body.classList.remove('move_content');
    nav.classList.remove('move_nav');
    }

})


/*Slider*/

let slider = document.querySelector('.slider-contenedor');
let sliderInd = document.querySelectorAll('.slider-test');
let contador = 1;
let tamañoWidth = sliderInd[0].clientWidth;
let intervalo = 2000;

window.addEventListener("resize",function(){
    tamañoWidth = sliderInd[0].clientWidth;
})

setInterval(function tiempo(){
    slides();
},intervalo);
    

function slides(){
    slider.style.transform = 'translate('+(- tamañoWidth * contador)+ 'px)'; 
    slider.style.transition = 'transform 1s'; 
    contador++;

    if(contador === sliderInd.length){
        contador=0;
        setTimeout(function(){
            slider.style.transform = 'translate(0px)'; 
            slider.style.transition = 'transform 0s'; 
        },intervalo)
    }
}