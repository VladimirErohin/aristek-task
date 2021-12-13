import React, {useEffect, useState} from 'react';
import Sidebar from "../sidebar/Sidebar";
import m from "./Main.module.scss";
import TasksSpace from "../tasks-space/TasksSpace";
import CompletedTasks from "../completed-tasks/CompletedTasks";
import edit from '../../image/edit.png';
import remove from '../../image/delete.png';
import copy from '../../image/copy.png';
import {v1} from "uuid";
import TaskService from "../../API/TaskService";

const Main = () => {
    const [tasks, setTasks] = useState([]);

    let icons = [
        {id: "edit", action: edit},
        {id: "copy", action: copy},
        {id: "remove", action: remove}
    ];

    useEffect(() => {
        fetchTasks()
    }, []);

    async function fetchTasks() {
        const getTodo = await TaskService.getTasks();
        setTasks(getTodo)
    }

    async function addTask(newTask) {
        let task = {
            userId: 1,
            id: v1(),
            title: newTask,
            completed: false
        }
        await TaskService.addTask(task)
        setTasks([task, ...tasks])
    }

    async function deleteTask(taskId) {
        await TaskService.deleteTask(taskId)
        setTasks(tasks.filter(t => t.id !== taskId));
    }

    async function updateTask (taskId, editTask, complete,update)  {

        let changedTask = {
            userId: 1,
            id: taskId,
            title: editTask,
            completed: complete
        };

        let editTasks = tasks.map(t => {
            if (t.id === taskId) {
                return {...t, title: editTask, completed:complete}
            } else {
                return t
            }
        });

        if((taskId>=0 && 10>=taskId)){    //testing update tasks from server
            await TaskService.updateTask(taskId, changedTask)
        }

        let filterTasks = tasks.filter(t => t.id !== taskId);
        setTasks([...editTasks])
        update ? setTasks([...editTasks]) : setTasks([...filterTasks, changedTask])
    }


    return (
        <div className={m.main}>
            <Sidebar/>
            <div className={m.content}>
                <TasksSpace
                    icons={icons}
                    total={tasks}
                    tasks={tasks}
                    addTask={addTask}
                    deleteTask={deleteTask}
                    onComplete={updateTask}
                    editTitle={updateTask}
                />
                <CompletedTasks
                    icons={icons}
                    tasks={tasks}
                    deleteTask={deleteTask}
                    onComplete={updateTask}
                />
            </div>
        </div>
    );
};

export default Main;