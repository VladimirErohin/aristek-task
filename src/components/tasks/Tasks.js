import React from 'react';
import at from './Tasks.module.scss';
import Task from "../task/Task";

const Tasks = (props) => {
    const{title,icons,tasks,deleteTask,onComplete,editTask,setChangeTitle} = props;

    let taskActive=tasks.map(t=>(
        <Task
            icons={icons}
            task={t}
            key={t.id}
            deleteTask={deleteTask}
            onComplete={onComplete}
            editTask={editTask}
            setChangeTitle={setChangeTitle}
        />)
    );

    return (
        <div className={at.all_tasks}>
            <div className={at.description}>{title}</div>
            {taskActive}
        </div>
)
    ;
};

export default Tasks;