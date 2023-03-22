const { createApp } = Vue

createApp({
	data() {
		return {
            toDoList: [],
            newTask: ""
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
            .catch((err) => {
                this.toDoList = [];
            })
        },
        addTask(){
            // console.log(this.newTask);
            this.toDoList.push(this.newTask);
            this.newTask= "";
            console.log(this.toDoList)
        }
    },
    mounted() {
        this.fetchToDoList();
    }
}).mount('#app')