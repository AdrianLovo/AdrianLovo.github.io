
var vm = new Vue({
  el: '#Catalogo', 
  data: {
    listado: [
      {titulo: '1984', autor: 'George Orwell', paginas: 432, isbn: '978-8490328248', imagen: '../../Resources/img/Libros/978-8490328248.jpg'},
      {titulo: 'Rebelion en la granja', autor: 'George Orwell', paginas: 144, isbn: '9788499890951', imagen: '../../Resources/img/Libros/9788499890951.jpg'},
      ],
    busqueda: '',
    alto: 200,
    ancho: 200,
  },

  computed: {
    buscarPorTitulo() { 
      return this.listado.filter((busqueda) => busqueda.titulo.includes(this.busqueda))
    },
 },
 
})