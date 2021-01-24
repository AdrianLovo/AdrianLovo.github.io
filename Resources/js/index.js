var vm = new Vue({
    el: "#Principal",
    data: {
        OtrosCursos: [{
            nombre: "Diplomado en Java",
            lugar: "ITCA, Santa Tecla. 2015 (Enero-Diciembre)"
        }, {
            nombre: "Diagnóstico de Software",
            lugar: "ITCA, Santa Tecla. 2011 (Diciembre)"
        }, {
            nombre: "Ensamble de Computadoras",
            lugar: "ITCA, Santa Tecla. 2011 (Noviembre)"
        }],
        Lenguajes: [{
            nombre: "HTML5",
            url: "Resources/img/Lenguajes/html.png"
        }, {
            nombre: "CSS3",
            url: "Resources/img/Lenguajes/css.png"
        }, {
            nombre: "JavaScript",
            url: "Resources/img/Lenguajes/javascript.png"
        }, {
            nombre: "Bootstrap",
            url: "Resources/img/Lenguajes/bootstrap.png"
        }, {
            nombre: "JQuery",
            url: "Resources/img/Lenguajes/jquery.png"
        }, {
            nombre: "Vue.js",
            url: "Resources/img/Lenguajes/vue.png"
        }, {
            nombre: "PHP",
            url: "Resources/img/Lenguajes/php.png"
        }, {
            nombre: "Laravel",
            url: "Resources/img/Lenguajes/laravel.png"
        }, {
            nombre: "JavaSE",
            url: "Resources/img/Lenguajes/javase.png"
        }, {
            nombre: "JavaEE",
            url: "Resources/img/Lenguajes/javaee.png"
        }, {
            nombre: "Visual Basic",
            url: "Resources/img/Lenguajes/vscode.png"
        }, {
            nombre: "C",
            url: "Resources/img/Lenguajes/c.png"
        }, {
            nombre: "Firebase",
            url: "Resources/img/Lenguajes/firebase.png"
        }, {
            nombre: "DB2",
            url: "Resources/img/Lenguajes/db2.png"
        }, {
            nombre: "MySQL",
            url: "Resources/img/Lenguajes/mysql.png"
        }, {
            nombre: "PostgreSQL",
            url: "Resources/img/Lenguajes/postgressql.png"
        }, {
            nombre: "SQL Server",
            url: "Resources/img/Lenguajes/sqlserver.png"
        }, {
            nombre: "Windows",
            url: "Resources/img/Lenguajes/windows.png"
        }, {
            nombre: "Ubuntu",
            url: "Resources/img/Lenguajes/ubuntu.png"
        }],
        OtrosLenguajes: [{
            nombre: "Ensamblador",
            lugar: 'Impartida en la materia "Arquitectura de computadoras" (UCA)',
            url: "Resources/img/Lenguajes/ensamblador.png"
        }, {
            nombre: "Prolog",
            lugar: 'Impartida en la materia "Programación Logica" (UCA)',
            url: "Resources/img/Lenguajes/prolog.png"
        }, {
            nombre: "Racket",
            lugar: 'Impartida en la materia "Programación Funcional" (UCA)',
            url: "Resources/img/Lenguajes/racket.png"
        }],
        Cualidades: [" Autodidacta", " Curioso y auto motivado", " Comprometido y responsable", " Alta atención al detalle y crítico conmigo mismo", " Ganas de trabajar, aprender y seguir mejorando"],
        Trabajo: [" Framework PHP - Laravel", " Vue.js y React.js", " Programación Web responsive (Grid y Flexbox)", "Utilizar de manera constante mis conocimientos en proyectos personales", " Perfeccionar y aumentar mis conocimientos sobre diferentes tecnologías"],
        Objetivos: []
    }
});