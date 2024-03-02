import React from "react";
//import { useState } from "react";
import { LIST_TYPES, LIST_COPY } from "../../config";
import css from './Form.module.css'

const FormSelect = props => {
    const {title, type, tasks} = props


    return (
        <form className={css.form}>
            <select className={css.select}>
                {Object.values(LIST_TYPES.BACKLOG).map(typ => {
                    const listBack = tasks.filter(task => task.status === typ)

                    return <option  value={typ} title={LIST_COPY[typ]} tasks={listBack}>{LIST_COPY[typ]}</option>
                })}
            </select>
            <button className={css.submit} type='submit'>Submit</button>
        </form>
    )
}

export default FormSelect