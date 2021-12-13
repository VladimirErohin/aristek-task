import axios from "axios";

export default class TaskService {

    static async getTasks(){
        let url='https://jsonplaceholder.typicode.com';

        const response= await axios.get(`${url}/todos`);
        return  response.data.slice(0,10)//we get only 10 tasks for testing the application
    }

    static async addTask(bodyTodo) {
        let url='https://jsonplaceholder.typicode.com';
        const response= await axios.post(`${url}/todos`,bodyTodo)
        return response.data
    }

    static async deleteTask(deleteId){
        let url='https://jsonplaceholder.typicode.com';
        const response= await axios.delete(`${url}/todos/${deleteId}`)
        return response.data
    }

    static async updateTask(taskId, updateData){
        let url='https://jsonplaceholder.typicode.com';
        const response= await axios.put(`${url}/todos/${taskId}`, updateData)
        return response.data
    }
}