import React from "react";
import { useRouteMatch } from 'react-router-dom'
//import { useState } from "react";
import { LIST_TYPES } from "../../config";
import css from './Form.module.css'


const FormSelect = props => {
    const { tasks, type, setTasks } = props
    

    const handleSubmit = e => {
        e.preventDefault()
    }

    const handleChange = (e) => {
		
		const updatedTasks = tasks.map((task) => {
			if (task.id === e.target.value) {
				return {...task, status: type }
                
			}
			return task
		})
		setTasks(updatedTasks);
	}
    
    return (
        <form className={css.form} onChange={handleChange} onSubmit={handleSubmit}>
            {
            Object.values(LIST_TYPES).indexOf(type) > 0 && (
                <select key={tasks} className={css.select} >
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
Добрый вечер! 

Нужно получить все таски (они у меня в переменной allTasks) и отфильтровать их по статусу. 

index берётся из компонента board.

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

В компонента list вообще нет информации про задачи из предыдущей колонки. 

Логика в том, что в этих дропдаунах задачи только из предыдущей колонки. 

Осталось вычислить, по какому индексу эта колонка и какой индекс у предыдущей –– если он вообще есть. Для бэклога, например, такого не будет. 

И получить задачи из предыдущей колонки. 

Для этого нужно будет 1) сделать вспомогательную структуру данных, где у каждой колонки будет индекс; 2) в компонента списка –– дать доступ ко всем задачам в целом; 3) получить индекс текущей колонки, идентифицировать предыдущую и отсортировать задачи по названию предыдущей колонки.

{Object.values(LIST_TYPES).map(type => {
					const listTasks = tasks.filter(task => task.status === type)
					if (!listTasks.length) return null;
					return (
                        <>
                        <select className={css.select}>
                        <option>Select Task</option>
                        {tasks
                        
                        .map(task => (
                            <option key={task.id} value={task.id}>{listTasks.title}</option>
                        ))}

*/
