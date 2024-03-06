import React from "react";
import { useRouteMatch } from 'react-router-dom'
//import { useState } from "react";
import { LIST_TYPES, LIST_COPY } from "../../config";
import css from './Form.module.css'

const FormSelect = props => {
    const {type, tasks, setTasks} = props


    return (
        <form className={css.form}>
            {Object.values(LIST_TYPES).indexOf(type) > 0 && (
                <select className={css.select}>
                    <option>Select Task</option>
                    {tasks
                        .filter(task => Object.values(LIST_TYPES).indexOf(task.status) < Object.values(LIST_TYPES).indexOf(type))
                        .map(task => (
                            <option key={task.id} value={task.id}>{task.title}</option>
                        ))}
                </select>
            )}
       </form>
    )
}

export default FormSelect


/* 

  {Object.values(ETasksStatus).indexOf(type) > 0 && (
                <select onChange={handleSelectChange}>
                    <option>Select Task</option>
                    {allTasks
                        .filter(task => Object.values(ETasksStatus).indexOf(task.status) < Object.values(ETasksStatus).indexOf(type))
                        .map(task => (
                            <option key={task.id} value={task.id}>{task.title}</option>
                        ))}
                </select>
            )}
ETasksStatus - это Ваш объект со статусами



    //const match = useRouteMatch()
	//const {taskId} = match.params
    

    //const task = tasks.find(task => task.id === taskId)

    /*const handleSelectChange = (e) => {
        const newStatus = e.target.value
		const updatedTasks = tasks.map(task => {
			if (task.id === taskId) {
				return {...task, status: newStatus}
			}
			return task
		})
		setTasks(updatedTasks)
    }  */
        