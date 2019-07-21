function MostrarListaUno(){
  $("#ListaUno").show();
  $("#ListaSQL").hide();
  $("#ListaGit").hide(); 
  $("#ListaVue").hide(); 
}

function MostrarLista(numero){
  $("#ListaUno").hide();      
  
  switch (numero){
    case 0:  
      $("#ListaSQL").show(); 
      $("#ListaGit").hide();
      $("#ListaVue").hide();
      break;
    case 1:  
      $("#ListaSQL").hide();
      $("#ListaGit").show(); 
      $("#ListaVue").hide();
      break;
    case 2:  
      $("#ListaSQL").hide();
      $("#ListaGit").hide(); 
      $("#ListaVue").show();
      break;  
  }
}


function MostrarCodigo(titulo, contenido) {
  $("#CodigoContenido").empty();
  var Titulo = [
      "SQL (Structured Query Language)",
      "Git / GitHub",
      "Vue.js"
  ];

  switch (titulo){
    case 0:
      var Contenido = [
        "<pre class='language-sql'><span class='token function'>SELECT, DISTINCT y ORDER BY</span><br><br> <span class='token keyword'>SELECT</span> * <span class='token keyword'>FROM</span> <span class='token string'>actor</span>;<br> <span class='token keyword'>SELECT</span> actor_id, first_name, last_name, last_update  <span class='token keyword'>FROM</span> <span class='token string'>actor</span>;<br> <span class='token keyword'>SELECT</span> actor_id, first_name as Nombre, last_name AS Apellido  <span class='token keyword'>FROM</span> <span class='token string'>actor</span>;<br> <span class='token keyword'>SELECT DISTINCT</span>(store_id) <span class='token keyword'>FROM</span> <span class='token string'>customer</span>;<br> <span class='token keyword'>SELECT</span> * <span class='token keyword'>FROM</span> <span class='token string'>country</span> <span class='token keyword'>ORDER BY</span> country <span class='token keyword'>ASC</span>;<br> </pre>",
        "<pre class='language-sql'> <span class='token function'>WHERE</span><br><br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>actor</span> <span class='token keyword'>WHERE</span> first_name='DAN'; <br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>city</span> <span class='token keyword'>WHERE</span> city='LONDON'; <br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>city</span> <span class='token keyword'>WHERE</span> country_id=102; <br><br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>city</span> <span class='token keyword'>WHERE</span> film_id > 50; <br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>city</span> <span class='token keyword'>WHERE</span> amount < 3; <br> <span class='token keyword'>SELECT DISTINCT</span>(amount) <span class='token keyword'>FROM</span> <span class='token string'>payment</span> <span class='token keyword'>WHERE</span> amount < 3; <br><br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>staff</span> <span class='token keyword'>WHERE</span> staff_id != 2; <br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>language</span> <span class='token keyword'>WHERE</span> name !='German'; <br> </pre>",
        "<pre class='language-sql'> <span class='token function'>AND OR y NOT</span><br><br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>country </span><span class='token keyword'>WHERE </span>country = 'Algeria' <span class='token keyword'>AND </span>country_id=2;<br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>country </span><span class='token keyword'>WHERE </span>country = 'Algeria' <span class='token keyword'>OR </span>country_id=1;<br> <span class='token keyword'>SELECT * FROM </span><span class='token string'>category </span><span class='token keyword'>WHERE </span>name <span class='token keyword'>NOT IN</span>('Action');<br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>category </span><span class='token keyword'>WHERE </span>name <span class='token keyword'>IN</span>('Action'); </pre>",
        "<pre class='language-sql'> <span class='token function'>IN</span><br><br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>customer </span><span class='token keyword'>WHERE </span>first_name='MARY' <span class='token keyword'>OR</span> first_name='PATRICIA';<br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>customer </span><span class='token keyword'>WHERE </span>first_name<span class='token keyword'> IN</span> ('MARY','PATRICIA');<br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>film </span><span class='token keyword'>WHERE </span>special_features <span class='token keyword'>IN</span> ('Trailers','Trailers, Deleted Scenes') <span class='token keyword'>AND </span>rating <span class='token keyword'>IN</span> ('G','NC-17')<span class='token keyword'> AND</span> length > 50;<br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>category </span><span class='token keyword'>WHERE </span>name <span class='token keyword'>NOT IN</span>('Action','Animation','Children');<br> </pre>",
        "<pre class='language-sql'> <span class='token function'>BETWEEN</span><br><br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>rental </span><span class='token keyword'>WHERE </span>customer_id <span class='token keyword'>BETWEEN </span>300 <span class='token keyword'><span class='token keyword'>AND </span></span>350 <span class='token keyword'>AND </span>staff_id=1;<br> <span class='token keyword'>SELECT * FROM </span><span class='token string'>payment </span><span class='token keyword'>WHERE </span>amount <span class='token keyword'>NOT BETWEEN</span> 3 <span class='token keyword'>AND </span>5; </pre>",
        "<pre class='language-sql'> <span class='token function'>LIKE</span><br><br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>actor </span><span class='token keyword'>WHERE </span>first_name <span class='token keyword'>LIKE </span>'A%E';<br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>actor </span><span class='token keyword'>WHERE </span>first_name <span class='token keyword'>LIKE </span>'A%' <span class='token keyword'>AND </span>last_name <span class='token keyword'>LIKE </span>'B%';<br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>actor </span><span class='token keyword'>WHERE </span>first_name <span class='token keyword'>LIKE </span>'%A' <span class='token keyword'>AND </span>last_name <span class='token keyword'>LIKE </span>'%N';<br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>actor</span> <span class='token keyword'>WHERE </span>first_name <span class='token keyword'>LIKE </span>'%NE%' <span class='token keyword'>AND </span>last_name <span class='token keyword'>LIKE </span>'%RO%';<br> </pre>",
        "<pre class='language-sql'> <span class='token function'>INNER JOIN, LEFT JOIN, RIGHT JOIN</span><br><br> <span class='token keyword'>SELECT </span><span class='token string'>A.title, A.description, A.release_year, A.language_id, B.name </span><br> <span class='token keyword'>FROM</span> <span class='token string'>film </span>A <span class='token keyword'>INNER JOIN</span> language B <span class='token keyword'>ON </span>A.language_id = B.language_id;<br><br> <span class='token keyword'>SELECT </span><span class='token string'>A.address Direccion, B.city Ciudad</span><br> <span class='token keyword'>FROM</span> address A <span class='token keyword'>INNER JOIN </span>city B <span class='token keyword'>ON </span>B.city_id=A.city_id;<br><br> <span class='token keyword'>SELECT</span> <span class='token string'>A.customer_id, A.first_name, A.last_name, B.actor_id, B.first_name, B.last_name</span><br> <span class='token keyword'>FROM </span>customer A <span class='token keyword'>RIGHT JOIN</span> actor B <span class='token keyword'>ON </span>B.last_name=A.last_name;<br><br> <span class='token keyword'>SELECT</span> <span class='token string'>A.customer_id, A.first_name, A.last_name, B.actor_id, B.first_name, B.last_name</span><br> <span class='token keyword'>FROM </span>customer A <span class='token keyword'>LEFT JOIN</span> actor B <span class='token keyword'>ON </span>B.last_name=A.last_name;<br> </pre>",
        "<pre class='language-sql'> <span class='token function'>COUNT, AVG, SUM, MAX, MIN</span><br><br> <span class='token keyword'>SELECT SUM</span>(amount) <span class='token keyword'>FROM </span><span class='token string'>payment</span>;<br> <span class='token keyword'>SELECT</span> inventory_id + film_id + store_id <span class='token keyword'>FROM </span><span class='token string'>inventory</span>;<br> <span class='token keyword'>SELECT COUNT(*)</span> <span class='token keyword'>FROM </span><span class='token string'>address</span>;<br> <span class='token keyword'>SELECT AVG(</span>rental_duration) <span class='token keyword'>FROM </span><span class='token string'>film</span>;<br> <span class='token keyword'>SELECT MAX(</span>length) <span class='token keyword'>FROM </span><span class='token string'>film</span>;<br> <span class='token keyword'>SELECT MIN(</span>length) <span class='token keyword'>FROM </span><span class='token string'>film</span>;<br> </pre>",
        "<pre class='language-sql'> <span class='token function'>GROUP BY</span><br><br> <span class='token keyword'>SELECT</span> last_name, count(last_name) <span class='token keyword'>FROM </span><span class='token string'>actor </span><span class='token keyword'>GROUP BY</span> last_name;<br><br> <span class='token keyword'>SELECT</span> A.customer_id, B.first_name, B.last_name, <span class='token keyword'>SUM</span>(A.amount)<br> <span class='token keyword'>FROM </span><span class='token string'>payment </span>A <span class='token keyword'>INNER JOIN</span> <span class='token string'>customer </span>B <span class='token keyword'>ON </span>A.customer_id=B.customer_id <br> <span class='token keyword'>GROUP BY</span> A.customer_id, B.first_name, B.last_name; </pre>",
        "<pre class='language-sql'> <span class='token function'>HAVING</span><br><br> <span class='token keyword'>SELECT </span>last_name, count(*) <span class='token keyword'>FROM </span><span class='token string'>actor </span><span class='token keyword'>GROUP BY</span> last_name <span class='token keyword'>HAVING COUNT</span>(last_name) > 3;<br><br> <span class='token keyword'>SELECT</span> <span class='token string'>B.customer_id, B.first_name, B.last_name,</span> <span class='token keyword'>SUM</span>(A.amount)<br> <span class='token keyword'>FROM </span>payment A <span class='token keyword'>INNER JOIN</span> customer B <span class='token keyword'>ON </span>B.customer_id=A.customer_id<br> <span class='token keyword'>GROUP BY</span> B.customer_id, B.first_name, B.last_name<br> <span class='token keyword'>HAVING SUM</span>(A.amount) < 60<br> <span class='token keyword'>ORDER BY</span> <span class='token keyword'>SUM</span>(A.amount) <span class='token keyword'>DESC</span>; </pre>"
      ]
      break;
    }  

  $("#CodigoTitulo").text(Titulo[titulo]);
  $("#CodigoContenido").append(Contenido[contenido] + "<center><button type='button' class='btn btn-info' data-dismiss='modal'>Cerrar</button></center>");
  $("#ModalCodigo").modal("show"); 

} 


