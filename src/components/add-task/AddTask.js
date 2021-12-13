import React, {useEffect,useState} from 'react';
import cr from './AddTask.module.scss';

const AddTask = ({addTask, editTitle, changeTask, changeTitle, setChangeTitle}) => {

    const [task, setTask] = useState('');
    const [title, setTitle] = useState('');
    const [isEmptyMessage, setIsEmptyMessage] = useState(false);

    useEffect(() => {
        if (changeTask.title) {
            setTitle(changeTask.title)
        }
    }, [changeTask.title && changeTitle]);

    let addNewTask = () => {
        if (task.length) {
            addTask(task);
            setTask('');
            setIsEmptyMessage(false);
        } else {
            setIsEmptyMessage(true)
        }
    };

    let onSave = (e) => {
        let titleEdit = e.currentTarget.value;
        setTitle(titleEdit)
    }

    let onSaveOrAdd = () => {
        if (title.length) {
            editTitle(changeTask.id, title, changeTask.completed, "update");
            setChangeTitle(false)
            setIsEmptyMessage(false);
            setTitle('')
        }else{
            addNewTask()
        }
    };

    return (
        <div className={cr.add_task}>
            <div className={cr.add_task_block}>
                {!changeTitle
                    ? <input
                        value={task}
                        onChange={e => setTask(e.currentTarget.value)}
                        type="text"
                        placeholder='+ Add a task, press Enter to save'/>
                    : <input
                        type="text"
                        value={title}
                        onChange={e => onSave(e)}
                        placeholder={changeTask.title}
                    />
                }
                <button onClick={onSaveOrAdd}>{changeTitle ? "Save" : "Add"}</button>
            </div>
            {isEmptyMessage ? <div className={cr.empty}>The field must not be empty</div> : ''}
        </div>
    );
};

export default AddTask;