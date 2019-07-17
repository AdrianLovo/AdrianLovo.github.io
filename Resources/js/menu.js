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
	 $("#Barra1").hover(function(){
        $(this).addClass("progress-striped active");}, 
        function(){
        $(this).removeClass("progress-striped active");
    });
    $("#Barra2").hover(function(){
        $(this).addClass("progress-striped active");}, 
        function(){
        $(this).removeClass("progress-striped active");
    });
    $("#Barra3").hover(function(){
        $(this).addClass("progress-striped active");}, 
        function(){
        $(this).removeClass("progress-striped active");
    });
    $("#Barra4").hover(function(){
        $(this).addClass("progress-striped active");}, 
        function(){
        $(this).removeClass("progress-striped active");
    });
    $("#Barra5").hover(function(){
        $(this).addClass("progress-striped active");}, 
        function(){
        $(this).removeClass("progress-striped active");
    });
    $("#Barra6").hover(function(){
        $(this).addClass("progress-striped active");}, 
        function(){
        $(this).removeClass("progress-striped active");
    });
    $("#Barra7").hover(function(){
        $(this).addClass("progress-striped active");}, 
        function(){
        $(this).removeClass("progress-striped active");
    });
    $("#Barra8").hover(function(){
        $(this).addClass("progress-striped active");}, 
        function(){
        $(this).removeClass("progress-striped active");
    });
}