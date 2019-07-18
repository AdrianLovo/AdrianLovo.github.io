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

  var Contenido = [
    "<pre class='language-sql'><br><br> <span class='token function'>SELECT, DISTINCT y ORDER BY</span><br><br> <span class='token keyword'>SELECT</span> * <span class='token keyword'>FROM</span> <span class='token string'>actor</span>;<br> <span class='token keyword'>SELECT</span> actor_id, first_name, last_name, last_update  <span class='token keyword'>FROM</span> <span class='token string'>actor</span>;<br> <span class='token keyword'>SELECT</span> actor_id, first_name as Nombre, last_name AS Apellido  <span class='token keyword'>FROM</span> <span class='token string'>actor</span>;<br> <span class='token keyword'>SELECT DISTINCT</span>(store_id) <span class='token keyword'>FROM</span> <span class='token string'>customer</span>;<br> <span class='token keyword'>SELECT</span> * <span class='token keyword'>FROM</span> <span class='token string'>country</span> <span class='token keyword'>ORDER BY</span> country <span class='token keyword'>ASC</span>;<br> </pre>",
    ""
  ]

  $("#CodigoTitulo").text(Titulo[titulo]);
  $("#CodigoContenido").append(Contenido[contenido] + "<center><button type='button' class='btn btn-info' data-dismiss='modal'>Cerrar</button></center>");
  $("#ModalCodigo").modal("show"); 

} 


/*<div class="container">
  <pre class='language-sql'>

      <span class='token function'>SELECT, DISTINCT y ORDER BY</span>

      <span class='token keyword'>SELECT</span> * <span class='token keyword'>FROM</span> <span class='token string'>actor</span>;
      <span class='token keyword'>SELECT</span> actor_id, first_name, last_name, last_update  <span class='token keyword'>FROM</span> <span class='token string'>actor</span>;
      <span class='token keyword'>SELECT</span> actor_id, first_name as Nombre, last_name AS Apellido  <span class='token keyword'>FROM</span> <span class='token string'>actor</span>; 
      <span class='token keyword'>SELECT DISTINCT</span>(store_id) <span class='token keyword'>FROM</span> <span class='token string'>customer</span>;
      <span class='token keyword'>SELECT</span> * <span class='token keyword'>FROM</span> <span class='token string'>country</span> <span class='token keyword'>ORDER BY</span> country <span class='token keyword'>ASC</span>;           
  </pre>
</div>*/
       