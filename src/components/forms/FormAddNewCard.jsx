import React from "react";
import { useState } from "react";
import css from './Form.module.css'

const FormAddNewCard = props => {
    const {addNewTask, setFormVisible} = props
    const [values, setValues] = useState({
        title: ''
    })

    const handleChange = e => {
        const fieldName = e.target.name
        setValues({...values, [fieldName]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (values.title) {
            addNewTask(values.title)
        }
        setFormVisible(false)
    }
    
    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input 
            className={css.input}
            id='taskTitle'
            name='title'
            type='text'
            placeholder='Enter New task title...'
            value={values.title}
            onChange={handleChange} 
            />
            <button className={css.submit} type='submit'>Submit</button>
        </form>
        
    )
}

export default FormAddNewCard