import React from 'react'
import css from './Header.module.css'
import Avatar from '../../assets/avatar.svg'

const Header = () => {
    return (
        <>
            <header className={css.header}>
                <h1 className={css.title}>Awesome Kanban Board</h1>
                <img className={css.avatar} src={Avatar} alt='' />
                <div className={css.menu}></div>
            </header>
        </>
    )
}

export default Header