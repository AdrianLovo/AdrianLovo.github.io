$(document).ready(function(){
 	Menu();
 	Barras();

 });

var contador = 1;

function Menu(){
	$('.menu_bar').click(function(){
		if(contador == 1){
			$('nav').animate({
				left: '0'
			});			
			contador = 0;
		}else{
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
}

function Barras(){
    for(i =1; i <11; i++){
        $("#Barra"+i).hover(function(){
            $(this).addClass("progress-striped active");}, 
            function(){
            $(this).removeClass("progress-striped active");
        });
    }
}

