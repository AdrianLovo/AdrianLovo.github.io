var vm = new Vue({
    el: "#Principal",
    data() {
        return{
            Proyectos: [{
                nombre: "BlogVideo - Firebase",
                imagen: "Resources/img/Proyectos/6.png",
                sitio: "https://ahcastillo-blog-platzi.web.app/",
                repositorio: "https://github.com/AdrianLovo/BlogVideo_Firebase",
                tecnologias: ["HTML", "CSS", "JavaScript", "Firebase"]
            },{
                nombre: "Exchange - Criptomonedas",
                imagen: "Resources/img/Proyectos/5.png",
                sitio: "https://adrianlovo-exchange.netlify.app/",
                repositorio: "https://github.com/AdrianLovo/Exchange",
                tecnologias: ["HTML", "CSS", "JavaScript", "Vue.js | Vue CLI | Vue Route"]
            },{
                nombre: "App Video",
                imagen: "Resources/img/Proyectos/3.png",
                sitio: "https://adrianlovo.github.io/App_Video/",
                repositorio: "https://github.com/AdrianLovo/App_Video",
                tecnologias: ["HTML", "CSS", "JavaScript"]
            },{
                nombre: "Ejemplo Blog Personal",
                imagen: "Resources/img/Proyectos/2.png",
                sitio: "https://adrianlovo.github.io/Maquetacion_BlogPersonal/",
                repositorio: "https://github.com/AdrianLovo/Maquetacion_BlogPersonal",
                tecnologias: ["HTML", "CSS | Responsive"]
            },{
                nombre: "Sitio Web Personal",
                imagen: "Resources/img/Proyectos/0.png",
                sitio: "https://adrianlovo.github.io/",
                repositorio: "https://github.com/AdrianLovo/AdrianLovo.github.io",
                tecnologias: ["HTML", "CSS | Responsive", "JavaScript", "Vue.js"]
            }],

            MiniProyectos: [{
                nombre: "Batatabit MobileFirst",
                sitio: "https://adrianlovo.github.io/MobileFirst/",
                repositorio: "https://github.com/AdrianLovo/MobileFirst",
                tecnologias: ["HTML", "CSS"],
                descripcion: "Sitio web Batatabit, creado y diseñado a partir de MobileFirst"
            },{
                nombre: "Copy Landing Page Google",
                sitio: "https://adrianlovo.github.io/CopyLandingPageGoogle/",
                repositorio: "https://github.com/AdrianLovo/CopyLandingPageGoogle",
                tecnologias: ["HTML", "CSS"],
                descripcion: "Copia (Estilo y estructura) de Landing Page de Pagina principal de Google"
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