var vm = new Vue({
	el: '#Principal',
	data: {

		OtrosCursos: [
			{nombre: 'Diplomado en Java', lugar: 'ITCA, Santa Tecla. 2015 (Enero-Diciembre)'},
			{nombre: 'Diagnóstico de Software', lugar: 'ITCA, Santa Tecla. 2011 (Diciembre)'},
			{nombre: 'Ensamble de Computadoras', lugar: 'ITCA, Santa Tecla. 2011 (Noviembre)'},
		],
		Lenguajes: [
			{nombre: 'Vue.Js', clase: 'progress-bar Vue', id:'Barra1', estilo: 'width: 20% !important;'},
			{nombre: 'VisualBasic', clase: 'progress-bar VB', id:'Barra2', estilo: 'width: 30% !important;'},
			{nombre: 'C', clase: 'progress-bar C', id:'Barra3', estilo: 'width: 40% !important;'},
			{nombre: 'CSS3', clase: 'progress-bar CSS3', id:'Barra4', estilo: 'width: 40% !important;'},
			{nombre: 'JavaEE', clase: 'progress-bar JavaEE', id:'Barra5', estilo: 'width: 50% !important;'},
			{nombre: 'JQuery', clase: 'progress-bar Jquery', id:'Barra6', estilo: 'width: 50% !important;'},
			{nombre: 'JavaScript', clase: 'progress-bar JavaScript', id:'Barra7', estilo: 'width: 50% !important;'},
			{nombre: 'HTML5', clase: 'progress-bar HTML5', id:'Barra8', estilo: 'width: 65% !important;'},
			{nombre: 'PHP', clase: 'progress-bar PHP', id:'Barra9', estilo: 'width: 65% !important;'},
			{nombre: 'SQL', clase: 'progress-bar SQL', id:'Barra10', estilo: 'width: 65% !important;'},			
		],
		OtrosLenguajes: [
			{nombre: 'Prolog', lugar: 'Impartida en la materia "Programación Logica" (UCA)'},
			{nombre: 'Racket', lugar: 'Impartida en la materia "Programación Funcional" (UCA)'},
			{nombre: 'Ensamblador', lugar: 'Impartida en la materia "Arquitectura de computadoras" (UCA)'},
		],
		Bases: ['DB2', 'MySQL', 'SQL Server','PostgreSQL'],
		Cualidades: [ 'Autodidacta', 'Curioso y auto motivado', 'Comprometido y responsable', 'Alta atención al detalle y crítico conmigo mismo' , 'Ganas de trabajar, aprender y seguir mejorando'],
		Trabajo: ['Framework PHP - Laravel', 'Iniciando la programación con Vue.js', 'Mejorando en la programación Web responsive', 'Perfeccionar y aumentar mis conocimientos sobre JavaEE cada día un poco más', 'Seguir las últimas tecnologías y tendencias en las aplicaciones empresariales'],
		Objetivos: [],
	},

})
