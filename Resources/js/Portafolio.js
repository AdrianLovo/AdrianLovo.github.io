var vm = new Vue({
    el: "#Principal",
    data() {
        return{
            Proyectos: [{
                nombre: "BlogVideo - Firebase",
                imagen: "Resources/img/Proyectos/1.png",
                sitio: "https://ahcastillo-blog-platzi.web.app/",
                repositorio: "",
                tecnologias: ["HTML", "CSS", "JavaScript", "Firebase"]
            },{
                nombre: "Exchange - Criptomonedas",
                imagen: "Resources/img/Proyectos/0.png",
                sitio: "https://adrianlovo-exchange.netlify.app/",
                repositorio: "https://github.com/AdrianLovo/Exchange",
                tecnologias: ["HTML", "CSS", "JavaScript", "Vue.js | Vue CLI | Vue Route"]
            }],
            MiniProyectos: [{
                nombre: "App Video",
                sitio: "http://adrianhumberto.com/HTMLCSSJavaScript_AppVideo/",
                repositorio: "https://github.com/AdrianLovo/HTMLCSSJavaScript_AppVideo",
                tecnologias: ["HTML", "CSS", "JavaScript"],
                descripcion: "Sitio de consulta de peliculas por genero de peliculas a traves de API."
            },{          
                nombre: "Batatabit MobileFirst",
                sitio: "http://adrianhumberto.com/HMTLCSS_MobileFirst/",
                repositorio: "https://github.com/AdrianLovo/HMTLCSS_MobileFirst",
                tecnologias: ["HTML", "CSS"],
                descripcion: "Sitio web Batatabit, creado y diseñado a partir de MobileFirst."
            },{
                nombre: "Blog Personal Básico",
                sitio: "http://adrianhumberto.com/HTMLCSS_BlogPersonal/",
                repositorio: "https://github.com/AdrianLovo/HTMLCSS_BlogPersonal",
                tecnologias: ["HTML", "CSS | Responsive"],
                descripcion: "Proyecto base de Blog Personal creado con HTML y CSS."
            },{
                nombre: "Copy Landing Page Google",
                sitio: "http://adrianhumberto.com/HTMLCSS_CopyLandingPageGoogle/",
                repositorio: "https://github.com/AdrianLovo/HTMLCSS_CopyLandingPageGoogle",
                tecnologias: ["HTML", "CSS"],
                descripcion: "Copia (Estilo y estructura) de Landing Page de Pagina principal de Google."
            },{
                nombre: "Paginación Básica PHP Puro",
                sitio: "http://64.227.22.30:8080/PHP_Paginacion/",
                repositorio: "https://github.com/AdrianLovo/PHP_Paginacion",
                tecnologias: ["HTML", "CSS", "PHP"],
                descripcion: "Paginacion Básica en PHP Puro sin JavaScript. Base de Datos Mysql"
            },{
                nombre: "Publicaciones con PHP y Fetch",
                sitio: "http://64.227.22.30:8080/Fetch_Images/",
                repositorio: "https://github.com/AdrianLovo/Publicaciones_FETCH_PHP",
                tecnologias: ["HTML", "CSS | Bootstrap", "JavaScript | Fetch", "PHP"],
                descripcion: "Sitio Web de prueba para publicar comentarios con una imagen adjunta, como prueba del uso de API nativa Fetch.. Base de Datos Mysql"
            },{
                nombre: "Paginación Completa PHP y JS",
                sitio: "http://64.227.22.30:8080/PHP_Paginacion_JavaScript.Fetch/",
                repositorio: "https://github.com/AdrianLovo/PHP_Paginacion_JavaScript.Fetch",
                tecnologias: ["HTML", "CSS", "JavaScript | Fetch", "PHP"],
                descripcion: "Paginacion Completa (Previus, Next, NumeroPaginas) Realizada con PHP Puro utilizando JavaScript (Fetch) para llamadas AJAX. Base de Datos Mysql"
            }],

            mostrarMas: true,
            miniProyectoNombre: "",
            miniProyectoTecnologia : [],
            miniProyectoRepositorio: "#",
            miniProyectoSitio: "#",
            miniProyectoDescripcion: ""        
        }
    },

     //Ya esta disponible el DOM
    mounted() {
        //Lazy Load de todas las imagenes cargadas
        const isIntersecting = (entry) => {
            return entry.isIntersecting     //True si esta dentro de la pantalla
        }

        const loadImage = (entry) => {
            const imagen = entry.target   
            const url = imagen.dataset.src
            imagen.src = url                        
            observer.unobserve(imagen)      //Eliminar el evento de la imagen ya que dejo de ser necesario
        }

        const observer = new IntersectionObserver((entries) => {   //Entradas que esta escuchando
            entries.filter(isIntersecting).forEach(loadImage)
        })

        const listNodes = document.getElementsByTagName('img')
        const arrayImages = [...listNodes]
        arrayImages.forEach( img =>  observer.observe(img))
    },

    methods: {
        masInfo: function (miniproyecto) {
            this.mostrarMas = !this.mostrarMas;    
            this.miniProyectoNombre = miniproyecto.nombre;
            this.miniProyectoTecnologia = miniproyecto.tecnologias
            this.miniProyectoRepositorio = miniproyecto.proyecto
            this.miniProyectoSitio = miniproyecto.sitio
            this.miniProyectoRepositorio = miniproyecto.repositorio
            this.miniProyectoDescripcion = miniproyecto.descripcion
        },

        menosInfo: function () {
            this.mostrarMas = !this.mostrarMas      
        },
      }   


});