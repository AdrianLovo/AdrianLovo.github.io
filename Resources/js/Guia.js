function MostrarListaUno(){
  $("#ListaUno").show();
  $("#ListaSQL").hide();
  $("#ListaGit").hide(); 
}

function MostrarLista(numero){
  $("#ListaUno").hide();      
  
  switch (numero){
    case 0:  
      $("#ListaSQL").show(); 
      $("#ListaGit").hide();
      break;
  }
  switch (numero){
    case 1:  
      $("#ListaSQL").hide();
      $("#ListaGit").show(); 
      break;
  }
}


function MostrarCodigo(titulo, contenido) {
  $("#CodigoContenido").empty();
  var Titulo = [
      "SQL (Structured Query Language)",
      "Git / GitHub"
  ];

  switch (titulo){
    case 0:
      var Contenido = [
        "<pre class='language-sql'><span class='token function'>SELECT, DISTINCT y ORDER BY</span><br><br> <span class='token keyword'>SELECT</span> * <span class='token keyword'>FROM</span> <span class='token string'>actor</span>;<br> <span class='token keyword'>SELECT</span> actor_id, first_name, last_name, last_update  <span class='token keyword'>FROM</span> <span class='token string'>actor</span>;<br> <span class='token keyword'>SELECT</span> actor_id, first_name as Nombre, last_name AS Apellido  <span class='token keyword'>FROM</span> <span class='token string'>actor</span>;<br> <span class='token keyword'>SELECT DISTINCT</span>(store_id) <span class='token keyword'>FROM</span> <span class='token string'>customer</span>;<br> <span class='token keyword'>SELECT</span> * <span class='token keyword'>FROM</span> <span class='token string'>country</span> <span class='token keyword'>ORDER BY</span> country <span class='token keyword'>ASC</span>;<br> </pre>",
        "<pre class='language-sql'> <span class='token function'>WHERE</span><br><br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>actor</span> <span class='token keyword'>WHERE</span> first_name='DAN'; <br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>city</span> <span class='token keyword'>WHERE</span> city='LONDON'; <br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>city</span> <span class='token keyword'>WHERE</span> country_id=102; <br><br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>city</span> <span class='token keyword'>WHERE</span> film_id > 50; <br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>city</span> <span class='token keyword'>WHERE</span> amount < 3; <br> <span class='token keyword'>SELECT DISTINCT</span>(amount) <span class='token keyword'>FROM</span> <span class='token string'>payment</span> <span class='token keyword'>WHERE</span> amount < 3; <br><br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>staff</span> <span class='token keyword'>WHERE</span> staff_id != 2; <br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>language</span> <span class='token keyword'>WHERE</span> name !='German'; <br> </pre>"
      ]
      break;
    }  

  $("#CodigoTitulo").text(Titulo[titulo]);
  $("#CodigoContenido").append(Contenido[contenido] + "<center><button type='button' class='btn btn-info' data-dismiss='modal'>Cerrar</button></center>");
  $("#ModalCodigo").modal("show"); 

} 


