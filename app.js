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
            console.log(this.newTask);
            // this.newTask= "";
             let data = {
                todo: this.newTask,
            }

            axios
            .post('./server.php', data, {
                headers:{
                    'Content-Type': 'multipart/form-data',
                }
            })
            .then((res) => {
                this.toDoList = res.data;
                this.toDoList.push(this.newTask);
                this.newTask = "";
            })
            .catch((err) => {
                console.log(err)
            })
        }
    },
    mounted() {
        this.fetchToDoList();
    }
}).mount('#app')