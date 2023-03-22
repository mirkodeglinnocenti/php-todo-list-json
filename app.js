const { createApp } = Vue

createApp({
	data() {
		return {
            toDoList: []
		}
	},
    methods:{
        fetchToDoList(){
            axios
            .get('./server.php')
            .then((res) =>{
                // console.log(res.data);
                this.toDoList = res.data;
                // console.log(this.toDoList);
            })
        }
    },
    mounted() {
        this.fetchToDoList();
    }
}).mount('#app')