const app = new Vue({

    el: '#app',
    data: {
        titulo: 'Tareas por hacer con Vue',
        tareas: [],
        nuevaTarea: '',

    },

    methods: {
        agregarTarea (){
            
            this.tareas.push({   // se usa this para llamar el data 
                nombre: this.nuevaTarea,
                estado: false,
            })
            this.nuevaTarea = ''
            localStorage.setItem('gim-vue', JSON.stringify(this.tareas))
        },
        editarTarea (index){
            this.tareas[index].estado = true
            localStorage.setItem('gim-vue', JSON.stringify(this.tareas))
        },
        eliminarTarea (index){
            this.tareas.splice(index, 1)
            localStorage.setItem('gim-vue', JSON.stringify(this.tareas))
        }
    },

    created: function(){
        let datosLocalS = JSON.parse(localStorage.getItem('gim-vue'))
        if(datosLocalS === null){
            this.tareas = []
        }else {
            this.tareas = datosLocalS
        }
    },

    computed: {

    }

})