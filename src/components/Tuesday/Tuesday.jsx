import React from 'react'
import TodoList from './TodoList/TodoList'
import classes from './Tuesday.module.css'

const Tuesday = (props) => {

    return (
        <div className={classes}>
            <TodoList />
        </div>
    )
}

export default Tuesday