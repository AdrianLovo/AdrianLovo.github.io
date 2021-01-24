var contador = 0;
const $menuBoton = document.getElementById('menuButton');
const $menuNav = document.getElementById('menuNav');
const $menu = document.getElementById('menu');
$menuBoton.addEventListener('click', mostrarOcultarMenu);

function mostrarOcultarMenu(){
    if(contador == 0){    
        $menuNav.classList.remove('quitarMenu');
        $menuNav.classList.add('mostrarMenu');   
        contador = 1;
    }else{  
        $menuNav.classList.add('quitarMenu');
        $menuNav.classList.remove('mostrarMenu');
        contador = 0;
    }   
} 