import React, {useState} from 'react';
import ts from './Task.module.scss';

const Task = (props) => {
    const {icons, task, deleteTask,onComplete, editTask,setChangeTitle} = props;
    let elAction = icons.map((el) => (
            <span key={el.id}><img src={el.action} alt={el.id} onClick={()=>onActionTask(task.id,el.id, task.title,task.completed)}/></span>
        )
    );
    const [isCompleted, setCompleted] = useState(task.completed);

    let completeTask = (id) => {
        setCompleted(pr => !pr);
        onComplete(id,task.title,!isCompleted);
    };
    function onActionTask (taskId, idAction, title, completed){
        if(idAction === 'remove'){
            deleteTask(taskId)
        }else if(idAction === 'edit'){
            editTask(taskId,title,completed,'update')
            setChangeTitle(true)
        }
    }

    return (
        <div className={ts.task}>
            <div className={ts.input_title}>
                <input type="checkbox" checked={isCompleted} onChange={()=>completeTask(task.id)}/>
                {!task.completed
                    ? <div className={ts.task_name}>{task.title}</div>
                    : <div className={ts.task_name_completed}><strike>{task.title}</strike></div>
                }

            </div>
            <div className={ts.task_action}>
                {elAction}
            </div>

        </div>
    );
};

export default Task;