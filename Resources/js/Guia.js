var vm = new Vue({	

	el:'#PanelPrincipal',

	data:{
		ListaUno: true,
		ListaSql: false,
		ListaGit: false,
		ListaVue: false,
		ListaLinux: false,
		ModalMostra: false,		
		DivMostrar: false,

		TituloModal: '',
		CodigoModal: '',
		TituloDiv: '',
		CodigoDiv: '',

		ValorListaAnterior: -1,

		Tecnologias: [
			{id: 0, nombre: ' Vue.js', entradas: 15, imagen: 'Resources/img/Lenguajes/vuejs.png'},
			{id: 1, nombre: ' Git / GitHub', entradas: 0, imagen: 'Resources/img/Lenguajes/Git.png'},
			{id: 2, nombre: ' Linux Comandos Basicos', entradas: 7, imagen: 'Resources/img/Lenguajes/Linux.png'},
			{id: 3, nombre: ' SQL (Structured Query Language)', entradas: 10, imagen: 'Resources/img/Lenguajes/SQL.png'}
		],


		ItemVue: [
			{id: 0, imagen: 'Resources/img/Lenguajes/vuejs.png', titulo: 'Instanciar Vue.js', enlace: 'https://github.com/AdrianLovo/NotasCodeVue.js/tree/master/01-Instancia%20Vue'},
			{id: 1, imagen: 'Resources/img/Lenguajes/vuejs.png', titulo: 'Metodos', enlace: 'https://github.com/AdrianLovo/NotasCodeVue.js/tree/master/02-Metodos%20Vue'},
			{id: 2, imagen: 'Resources/img/Lenguajes/vuejs.png', titulo: 'Directiva v-show', enlace: 'https://github.com/AdrianLovo/NotasCodeVue.js/tree/master/03-Directiva%20v-show'},
			{id: 3, imagen: 'Resources/img/Lenguajes/vuejs.png', titulo: 'Directiva v-if v-else', enlace: 'https://github.com/AdrianLovo/NotasCodeVue.js/tree/master/04-Directiva%20v-if%20v-else'},
			{id: 4, imagen: 'Resources/img/Lenguajes/vuejs.png', titulo: 'Directiva v-else-if', enlace: 'https://github.com/AdrianLovo/NotasCodeVue.js/tree/master/05-Directiva%20v-if-else-if'},
			{id: 5, imagen: 'Resources/img/Lenguajes/vuejs.png', titulo: 'Directiva v-for', enlace: 'https://github.com/AdrianLovo/NotasCodeVue.js/tree/master/06-Directiva%20v-for'},
			{id: 6, imagen: 'Resources/img/Lenguajes/vuejs.png', titulo: 'Directiva v-text v-html', enlace: 'https://github.com/AdrianLovo/NotasCodeVue.js/tree/master/07-Directiva%20v-text%20v-html'},
			{id: 7, imagen: 'Resources/img/Lenguajes/vuejs.png', titulo: 'Directiva v-bind', enlace: 'https://github.com/AdrianLovo/NotasCodeVue.js/tree/master/08-Directiva%20v-bind'},
			{id: 8, imagen: 'Resources/img/Lenguajes/vuejs.png', titulo: 'Componentes', enlace: 'https://github.com/AdrianLovo/NotasCodeVue.js/tree/master/09-Componentes'},
			{id: 9, imagen: 'Resources/img/Lenguajes/vuejs.png', titulo: 'Componentes . Props', enlace: 'https://github.com/AdrianLovo/NotasCodeVue.js/tree/master/10-Componentes%20.%20Props'},
			{id: 10, imagen: 'Resources/img/Lenguajes/vuejs.png', titulo: 'Transiciones', enlace: 'https://github.com/AdrianLovo/NotasCodeVue.js/tree/master/11-Transiciones'},
			{id: 11, imagen: 'Resources/img/Lenguajes/vuejs.png', titulo: 'Filtros', enlace: 'https://github.com/AdrianLovo/NotasCodeVue.js/tree/master/12-Filtros'},
			{id: 12, imagen: 'Resources/img/Lenguajes/vuejs.png', titulo: 'Tareas Computadas', enlace: 'https://github.com/AdrianLovo/NotasCodeVue.js/tree/master/13-Tareas%20Computadas'},
			{id: 13, imagen: 'Resources/img/Lenguajes/vuejs.png', titulo: 'Vue con AJAX', enlace: 'https://github.com/AdrianLovo/NotasCodeVue.js/tree/master/14-Vue%20con%20AJAX'},
			{id: 14, imagen: 'Resources/img/Lenguajes/vuejs.png', titulo: 'Vue Cli', enlace: 'https://github.com/AdrianLovo/NotasCodeVue.js/tree/master/15-Vue%20Cli'},
		],

		ItemGit: [
		],

		ItemLinux: [
			{id: 0, imagen: 'Resources/img/Lenguajes/Linux.png', titulo: 'Navegación entre archivos y listado de archivos'},
			{id: 1, imagen: 'Resources/img/Lenguajes/Linux.png', titulo: 'Creación de Directorios , mover, copiar y eliminar archivos'},
			{id: 2, imagen: 'Resources/img/Lenguajes/Linux.png', titulo: 'Links (Apuntadores)'},
			{id: 3, imagen: 'Resources/img/Lenguajes/Linux.png', titulo: 'Otros Comandos'},
			{id: 4, imagen: 'Resources/img/Lenguajes/Linux.png', titulo: 'Monitoreo de procesos'},
			{id: 5, imagen: 'Resources/img/Lenguajes/Linux.png', titulo: 'Busqueda de contenido'},
			{id: 6, imagen: 'Resources/img/Lenguajes/Linux.png', titulo: 'Crontab'},
		],

		ItemSql: [
			{id: 0, imagen: 'Resources/img/Lenguajes/SQL.png', titulo: 'SELECT, DISTINCT y ORDER BY'},
			{id: 1, imagen: 'Resources/img/Lenguajes/SQL.png', titulo: 'WHERE'},
			{id: 2, imagen: 'Resources/img/Lenguajes/SQL.png', titulo: 'AND OR y NOT'},
			{id: 3, imagen: 'Resources/img/Lenguajes/SQL.png', titulo: 'IN'},
			{id: 4, imagen: 'Resources/img/Lenguajes/SQL.png', titulo: 'BETWEEN'},
			{id: 5, imagen: 'Resources/img/Lenguajes/SQL.png', titulo: 'LIKE'},
			{id: 6, imagen: 'Resources/img/Lenguajes/SQL.png', titulo: 'INNER JOIN, LEFT JOIN, RIGHT JOIN'},
			{id: 7, imagen: 'Resources/img/Lenguajes/SQL.png', titulo: 'COUNT, AVG, SUM, MAX, MIN'},
			{id: 8, imagen: 'Resources/img/Lenguajes/SQL.png', titulo: 'GROUP BY'},
			{id: 9, imagen: 'Resources/img/Lenguajes/SQL.png', titulo: 'HAVING'}
		],


		CodeSql: [
	        {codigo: "<pre class='language-sql'><span class='token function'>SELECT, DISTINCT y ORDER BY</span><br><br> <span class='token keyword'>SELECT</span> * <span class='token keyword'>FROM</span> <span class='token string'>actor</span>;<br> <span class='token keyword'>SELECT</span> actor_id, first_name, last_name, last_update  <span class='token keyword'>FROM</span> <span class='token string'>actor</span>;<br> <span class='token keyword'>SELECT</span> actor_id, first_name as Nombre, last_name AS Apellido  <span class='token keyword'>FROM</span> <span class='token string'>actor</span>;<br> <span class='token keyword'>SELECT DISTINCT</span>(store_id) <span class='token keyword'>FROM</span> <span class='token string'>customer</span>;<br> <span class='token keyword'>SELECT</span> * <span class='token keyword'>FROM</span> <span class='token string'>country</span> <span class='token keyword'>ORDER BY</span> country <span class='token keyword'>ASC</span>;<br> </pre>"},
	        {codigo: "<pre class='language-sql'> <span class='token function'>WHERE</span><br><br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>actor</span> <span class='token keyword'>WHERE</span> first_name='DAN'; <br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>city</span> <span class='token keyword'>WHERE</span> city='LONDON'; <br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>city</span> <span class='token keyword'>WHERE</span> country_id=102; <br><br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>city</span> <span class='token keyword'>WHERE</span> film_id > 50; <br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>city</span> <span class='token keyword'>WHERE</span> amount < 3; <br> <span class='token keyword'>SELECT DISTINCT</span>(amount) <span class='token keyword'>FROM</span> <span class='token string'>payment</span> <span class='token keyword'>WHERE</span> amount < 3; <br><br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>staff</span> <span class='token keyword'>WHERE</span> staff_id != 2; <br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>language</span> <span class='token keyword'>WHERE</span> name !='German'; <br> </pre>"},
	        {codigo: "<pre class='language-sql'> <span class='token function'>AND OR y NOT</span><br><br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>country </span><span class='token keyword'>WHERE </span>country = 'Algeria' <span class='token keyword'>AND </span>country_id=2;<br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>country </span><span class='token keyword'>WHERE </span>country = 'Algeria' <span class='token keyword'>OR </span>country_id=1;<br> <span class='token keyword'>SELECT * FROM </span><span class='token string'>category </span><span class='token keyword'>WHERE </span>name <span class='token keyword'>NOT IN</span>('Action');<br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>category </span><span class='token keyword'>WHERE </span>name <span class='token keyword'>IN</span>('Action'); </pre>"},
	        {codigo: "<pre class='language-sql'> <span class='token function'>IN</span><br><br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>customer </span><span class='token keyword'>WHERE </span>first_name='MARY' <span class='token keyword'>OR</span> first_name='PATRICIA';<br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>customer </span><span class='token keyword'>WHERE </span>first_name<span class='token keyword'> IN</span> ('MARY','PATRICIA');<br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>film </span><span class='token keyword'>WHERE </span>special_features <span class='token keyword'>IN</span> ('Trailers','Trailers, Deleted Scenes') <span class='token keyword'>AND </span>rating <span class='token keyword'>IN</span> ('G','NC-17')<span class='token keyword'> AND</span> length > 50;<br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>category </span><span class='token keyword'>WHERE </span>name <span class='token keyword'>NOT IN</span>('Action','Animation','Children');<br> </pre>"},
	        {codigo: "<pre class='language-sql'> <span class='token function'>BETWEEN</span><br><br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>rental </span><span class='token keyword'>WHERE </span>customer_id <span class='token keyword'>BETWEEN </span>300 <span class='token keyword'><span class='token keyword'>AND </span></span>350 <span class='token keyword'>AND </span>staff_id=1;<br> <span class='token keyword'>SELECT * FROM </span><span class='token string'>payment </span><span class='token keyword'>WHERE </span>amount <span class='token keyword'>NOT BETWEEN</span> 3 <span class='token keyword'>AND </span>5; </pre>"},
	        {codigo: "<pre class='language-sql'> <span class='token function'>LIKE</span><br><br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>actor </span><span class='token keyword'>WHERE </span>first_name <span class='token keyword'>LIKE </span>'A%E';<br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>actor </span><span class='token keyword'>WHERE </span>first_name <span class='token keyword'>LIKE </span>'A%' <span class='token keyword'>AND </span>last_name <span class='token keyword'>LIKE </span>'B%';<br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>actor </span><span class='token keyword'>WHERE </span>first_name <span class='token keyword'>LIKE </span>'%A' <span class='token keyword'>AND </span>last_name <span class='token keyword'>LIKE </span>'%N';<br> <span class='token keyword'>SELECT * FROM</span> <span class='token string'>actor</span> <span class='token keyword'>WHERE </span>first_name <span class='token keyword'>LIKE </span>'%NE%' <span class='token keyword'>AND </span>last_name <span class='token keyword'>LIKE </span>'%RO%';<br> </pre>"},
	        {codigo: "<pre class='language-sql'> <span class='token function'>INNER JOIN, LEFT JOIN, RIGHT JOIN</span><br><br> <span class='token keyword'>SELECT </span><span class='token string'>A.title, A.description, A.release_year, A.language_id, B.name </span><br> <span class='token keyword'>FROM</span> <span class='token string'>film </span>A <span class='token keyword'>INNER JOIN</span> language B <span class='token keyword'>ON </span>A.language_id = B.language_id;<br><br> <span class='token keyword'>SELECT </span><span class='token string'>A.address Direccion, B.city Ciudad</span><br> <span class='token keyword'>FROM</span> address A <span class='token keyword'>INNER JOIN </span>city B <span class='token keyword'>ON </span>B.city_id=A.city_id;<br><br> <span class='token keyword'>SELECT</span> <span class='token string'>A.customer_id, A.first_name, A.last_name, B.actor_id, B.first_name, B.last_name</span><br> <span class='token keyword'>FROM </span>customer A <span class='token keyword'>RIGHT JOIN</span> actor B <span class='token keyword'>ON </span>B.last_name=A.last_name;<br><br> <span class='token keyword'>SELECT</span> <span class='token string'>A.customer_id, A.first_name, A.last_name, B.actor_id, B.first_name, B.last_name</span><br> <span class='token keyword'>FROM </span>customer A <span class='token keyword'>LEFT JOIN</span> actor B <span class='token keyword'>ON </span>B.last_name=A.last_name;<br> </pre>"},
	        {codigo: "<pre class='language-sql'> <span class='token function'>COUNT, AVG, SUM, MAX, MIN</span><br><br> <span class='token keyword'>SELECT SUM</span>(amount) <span class='token keyword'>FROM </span><span class='token string'>payment</span>;<br> <span class='token keyword'>SELECT</span> inventory_id + film_id + store_id <span class='token keyword'>FROM </span><span class='token string'>inventory</span>;<br> <span class='token keyword'>SELECT COUNT(*)</span> <span class='token keyword'>FROM </span><span class='token string'>address</span>;<br> <span class='token keyword'>SELECT AVG(</span>rental_duration) <span class='token keyword'>FROM </span><span class='token string'>film</span>;<br> <span class='token keyword'>SELECT MAX(</span>length) <span class='token keyword'>FROM </span><span class='token string'>film</span>;<br> <span class='token keyword'>SELECT MIN(</span>length) <span class='token keyword'>FROM </span><span class='token string'>film</span>;<br> </pre>"},
	        {codigo: "<pre class='language-sql'> <span class='token function'>GROUP BY</span><br><br> <span class='token keyword'>SELECT</span> last_name, count(last_name) <span class='token keyword'>FROM </span><span class='token string'>actor </span><span class='token keyword'>GROUP BY</span> last_name;<br><br> <span class='token keyword'>SELECT</span> A.customer_id, B.first_name, B.last_name, <span class='token keyword'>SUM</span>(A.amount)<br> <span class='token keyword'>FROM </span><span class='token string'>payment </span>A <span class='token keyword'>INNER JOIN</span> <span class='token string'>customer </span>B <span class='token keyword'>ON </span>A.customer_id=B.customer_id <br> <span class='token keyword'>GROUP BY</span> A.customer_id, B.first_name, B.last_name; </pre>"},
	        {codigo: "<pre class='language-sql'> <span class='token function'>HAVING</span><br><br> <span class='token keyword'>SELECT </span>last_name, count(*) <span class='token keyword'>FROM </span><span class='token string'>actor </span><span class='token keyword'>GROUP BY</span> last_name <span class='token keyword'>HAVING COUNT</span>(last_name) > 3;<br><br> <span class='token keyword'>SELECT</span> <span class='token string'>B.customer_id, B.first_name, B.last_name,</span> <span class='token keyword'>SUM</span>(A.amount)<br> <span class='token keyword'>FROM </span>payment A <span class='token keyword'>INNER JOIN</span> customer B <span class='token keyword'>ON </span>B.customer_id=A.customer_id<br> <span class='token keyword'>GROUP BY</span> B.customer_id, B.first_name, B.last_name<br> <span class='token keyword'>HAVING SUM</span>(A.amount) < 60<br> <span class='token keyword'>ORDER BY</span> <span class='token keyword'>SUM</span>(A.amount) <span class='token keyword'>DESC</span>; </pre>"}
      	],

      	CodeLinux:[
      		{codigo: "<pre class='language-markdown'> <br> &nbsp;&nbsp;&nbsp;&nbsp<span class='token string'>Limpiar pantalla</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> clear | Ctrl + l<br> <br> &nbsp;&nbsp;&nbsp;&nbsp;<span class='token string'>Donde nos encontramos en directorio</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> pwd&nbsp;&nbsp;&nbsp;&nbsp;<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> cd + enter (Por defecto nos lleva a home)<br> <br> &nbsp;&nbsp;&nbsp;&nbsp;<span class='token string'>Listar archivos</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> ls<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> ls -l<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'-'' para los archivos<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'d' para directorios<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'a' indica un link<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> ls -lt (indica la fecha de creacion)<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> ls -ltr (Ordena por el ultimo creado)<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> ls -lh (Muestra el tamaño de los archivos en un formato legible)<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> ls -lhsr (Archivo ordenados segun tamaño)<br> <br> &nbsp;&nbsp;&nbsp;&nbsp;<span class='token string'>Listar directorios y mostrar el tamaño</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> du -h -d 1&nbsp;&nbsp;&nbsp;&nbsp;<br> <br> &nbsp;&nbsp;&nbsp;&nbsp;<span class='token string'>Cambio de directorio</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> cd (Change Directory)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br> </pre>"},
      		{codigo: "<pre class='language-markdown'> <br> &nbsp;&nbsp;&nbsp;&nbsp;<span class='token string'>Crear Directorio</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> mkdir NombreCarpeta<br> <br> &nbsp;&nbsp;&nbsp;&nbsp;<span class='token string'>Mover archivos</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> mv NombreArchivo.terminacion Carpeta/<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> mv ../NombreArchivo.terminacion ./&nbsp;&nbsp;&nbsp;&nbsp;(Mover archivo de directorio padre)<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> mv ../*terminacion .&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Mover todos los archivos de un tipo al directorio actual)<br> <br> &nbsp;&nbsp;&nbsp;&nbsp;<span class='token string'>Copiar Archivos</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> cp NombreArchivo.terminacion RutaDirectorio<br> <br> &nbsp;&nbsp;&nbsp;&nbsp;<span class='token string'>Renombrar Archivos</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> mv NombreArchivo.terminacion NombreNuevo.terminacion<br> <br> &nbsp;&nbsp;&nbsp;&nbsp;<span class='token string'>Modificar archivo</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> touch NombreArchivo &nbsp;&nbsp;&nbsp;&nbsp;(Modifica la fecha de ultimo acceso y modificacion a el archivo)<br> </pre>"},
			{codigo: "<pre class='language-markdown'> <br> &nbsp;&nbsp;&nbsp;&nbsp;<span class='token string'>Crear un link</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> ln -s Original Nuevo<br> <br> &nbsp;&nbsp;&nbsp;&nbsp;<span class='token string'>Eliminar archivos y carpetas</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> rm nombre<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> rm -rf Carpeta/<br> </pre>"},
			{codigo: "<pre class='language-markdown'> <br> &nbsp;&nbsp;&nbsp;&nbsp;<span class='token string'>Informacion sobre comandos</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> man 'COMANDO'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br> <br> &nbsp;&nbsp;&nbsp;&nbsp;<span class='token string'>Calculadora en terminal</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> bc -q (Calculador), exit(quit)<br> <br> &nbsp;&nbsp;&nbsp;&nbsp;<span class='token string'>Leer archivo</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> more nombreArchivo<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> tail -f nombreArchivo (Ultimas lienas modificadas)<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> cat nombreArchivo (Muestra todo el archivo)<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> wc -l nombreArchivo (Lineas que posee el archivo)<br> </pre>"},
			{codigo: "<pre class='language-markdown'> <br> <span class='token string'>Ruta de comando que se esta ejecutando</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> which comando<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> top (Monstra listado de procesos)<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> php archivo.php & (Envia al background de la terminal y regresa el PID)<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> kill -9 PID<br> </pre>"},
			{codigo: "<pre class='language-markdown'> <br> &nbsp;&nbsp;&nbsp;&nbsp;<span class='token string'>Dentro de un archivo segun una palabra</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> cat nombreArchivo | grep palabra<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> cat nombreArchivo | grep palabra | wc -l (Indicar unicamente el numero de coincidencias)<br> <br> <br> &nbsp;&nbsp;&nbsp;&nbsp;<span class='token string'>Dentro de un directorio (Indicando el archivo)</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> grep -r . -e palabraBuscar&nbsp;&nbsp;&nbsp;&nbsp;(. indica el directorio actual)<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> grep -r . -e palabraBuscar -n&nbsp;&nbsp;&nbsp;&nbsp;(. indica el directorio actual, indica tambien la linea de coincidencia)<br> </pre>"},
			{codigo: "<pre class='language-markdown'> <br> &nbsp;&nbsp;&nbsp;&nbsp;<span class='token string'>Mostrar</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> crontab -l <br> <br> &nbsp;&nbsp;&nbsp;&nbsp;<span class='token string'>Editar</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> crontab -e<br> <br> <br> &nbsp;&nbsp;&nbsp;&nbsp;Minutos (0-59) <span class='token string'>/</span> Horas (0-23) <span class='token string'>/</span> Dia del mes (1-31) <span class='token string'>/</span> Mes (1-12) <span class='token string'>/ </span>dia de la semana (0 Domingo - 6 Sabado) / <br> <br> &nbsp;&nbsp;&nbsp;&nbsp;<span class='token string'>* * * * * script.sh</span><br> <br> &nbsp;&nbsp;&nbsp;&nbsp;* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:Todos los valores<br> &nbsp;&nbsp;&nbsp;&nbsp;1-10 &nbsp;&nbsp;&nbsp;&nbsp;:De 1 a 10<br> &nbsp;&nbsp;&nbsp;&nbsp;*/5 &nbsp;&nbsp;&nbsp;&nbsp;:Cada 5 minutos<br> </pre>"},
      	]

	},

	methods:{
		MostrarLista: function(id){
			switch (id){
				case 0: 
					this.ListaUno = false;
					this.ListaVue = true;
					this.ValorListaAnterior=0;
					break;					
				case 1: 
					this.ListaUno = false;
					this.ListaGit = true;
					this.ValorListaAnterior=1;
					break;
				case 2: 
					this.ListaUno = false;
					this.ListaLinux = true;
					this.ValorListaAnterior=2;
					break;
				case 3:
					this.ListaUno = false;
					this.ListaSql = true;
					this.ValorListaAnterior=3;
					break;					
			}				
		},

		RegresarLista: function(){
			this.DivMostrar = false;
			this.MostrarLista(this.ValorListaAnterior);
		},

		MostrarTituloUno: function(){
			this.ListaUno = true;
			this.ListaSql = false;
			this.ListaGit = false;
			this.ListaVue = false;
			this.ListaLinux = false;
			this.DivMostrar = false;			
		},

		MostrarCodigo: function(tecnologia, id, titulo){
			this.thiTituloModal= "";
			this.CodigoModal= "";
			this.TituloDiv= "";
			this.CodigoDiv= "";

			console.log(tecnologia +"   "  + id + "   "+ titulo);

			switch (tecnologia){
				case 0: 	//Vue.js							
					break;
				case 1: 
					this.TituloModal = this.Tecnologias[tecnologia].nombre;
					this.CodigoModal = this.CodeSql[id].codigo;
					this.ModalMostra = true;
					break;
				case 2: 
					this.ListaLinux = false;
					this.DivMostrar = true;
					this.TituloDiv = titulo;
					this.CodigoDiv = this.CodeLinux[id].codigo;
					break;
				case 3: 
					this.TituloModal = this.Tecnologias[tecnologia].nombre;
					this.CodigoModal = this.CodeSql[id].codigo;
					this.ModalMostra = true;
					break;	
			}	
					
		},

		CerrarModal: function(){
			this.ModalMostra = false;
		},


	}
})