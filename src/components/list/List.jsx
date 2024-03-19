import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import { LIST_TYPES } from "../../config";
import FormAddNewCard from '../forms/FormAddNewCard'
import FormSelect from '../forms/FormSelect'
import css from './List.module.css'

const List = props => {
    const {title, type, tasks, addNewTask, setTasks, index, allTasks } = props
    const [isFormVisible, setFormVisible] = useState(false)
    

    const handleClick = () => {
        setFormVisible(!isFormVisible)
    };
    const selectTasks = allTasks.filter(
        (task) => task.status === Object.values(LIST_TYPES)[index]
    );

    

    return(
        <div className={css.list}>
            <h2 className={css.listTitle}>{title}</h2>
            {tasks.map(task => {
                return(
                    <Link to={`/tasks/${task.id}`} className={css.taskLink}>
                        <div key={task.id} className={css.task}>{task.title}</div>
                    </Link>
                )
            })}
            { (
                <button className={css.addButton} onClick={handleClick}>+Add card</button>
            )}
            {type === LIST_TYPES.BACKLOG && isFormVisible && (
                <FormAddNewCard addNewTask={addNewTask} setFormVisible={setFormVisible} />
            )}
            {type !== LIST_TYPES.BACKLOG && isFormVisible && (
                <FormSelect 
                setFormVisible={setFormVisible} 
                type={type}
				tasks = {selectTasks} 
                setTasks={setTasks} />
            )}
        </div>
    )
}

export default List