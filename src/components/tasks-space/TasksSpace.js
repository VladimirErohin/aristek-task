import React, {useState} from 'react';
import ts from "./TasksSpace.module.scss";
import AddTask from "../add-task/AddTask";
import Tasks from "../tasks/Tasks";

const TasksSpace = ({total, icons, tasks, addTask,deleteTask,onComplete,editTitle}) => {

    let activeTasks=tasks.filter(t=>!t.completed);
    let countToDo=`To do (${activeTasks.length})`;

    const [updateTask, setUpdateTask] = useState({});
    const [changeTitle, setChangeTitle] = useState(false);

    let editTask = (taskId,title,completed) =>{
        setUpdateTask({id:taskId, title:title, completed:completed, isEmpty:true})
    };

    return (
        <div className={ts.tasks_space} >
            <AddTask
                addTask={addTask}
                editTitle={editTitle}
                changeTask={updateTask}
                changeTitle={changeTitle}
                setChangeTitle={setChangeTitle}
            />
            <div className={ts.total}><span>Total: {total.length}</span></div>
            <Tasks
                title={countToDo}
                icons={icons}
                tasks={activeTasks}
                deleteTask={deleteTask}
                onComplete={onComplete}
                editTask={editTask}
                setChangeTitle={setChangeTitle}
            />
        </div>
    );
};

export default TasksSpace;