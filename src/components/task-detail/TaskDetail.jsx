import React from "react";
import { useRouteMatch, Link } from 'react-router-dom';
import css from './TaskDetail.module.css'

const TaskDetail = props => {
    const match = useRouteMatch()
    const {taskId} = match.params
    const {tasks} = props

    const task = tasks.find(task => task.id === taskId)

    /*let edit = document.querySelectorAll('.btnEdit');
    let text = document.querySelectorAll('.text');

    for( let i = 0; i < edit.length; i++ ){
    let editMode = false;
  
    edit[i].addEventListener('click', function(){
    if( editMode ) {
      this.textContent = "Edit";
      text[i].removeAttribute('contentEditable');
    } else {
      this.textContent = "Ok";      
      text[i].setAttribute('contentEditable', true);
      text[i].focus();
    }
    
    editMode = !editMode;
  });
}*/
    return (
        <div className={css.wrapper}>
        {task ? (
          <>
            <header className={css.header}>
                <h2 className={css.title}>{task.title}</h2>
                <Link to='/' className={css.homeLink}>&#10006;</Link>
            </header>
            <p contenteditable="true" className={css.text}>{task.description || 'This task has no description'}</p>
          </>
        ) : (
          <header className={css.header}>
            <h2>Task with ID{taskId} not found</h2>
            <Link to='/' className={css.homeLink}>&#10006;</Link>
          </header>
        )}
        </div>
    )
}

export default TaskDetail

//<button className={css.btnEdit}>Edit description</button>