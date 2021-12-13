import React from 'react';
import ct from './CompletedTasks.module.scss';
import Tasks from "../tasks/Tasks";

const CompletedTasks = ({icons, tasks, deleteTask,onComplete}) => {
    let remove = icons.filter(el => el.id === "remove");
    let completedTasks=tasks.filter(t=>t.completed);
    let countCompleted=`Completed (${completedTasks.length})`;

    return (
        <div className={ct.completed_tasks}>
            <Tasks
                title={countCompleted}
                icons={remove}
                tasks={completedTasks}
                deleteTask={deleteTask}
                onComplete={onComplete}
            />
        </div>
    );
};

export default CompletedTasks;