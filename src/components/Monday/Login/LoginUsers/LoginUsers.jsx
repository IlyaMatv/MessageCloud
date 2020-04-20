import React from 'react'
import classes from './LoginUsers.module.css'

const LoginUsers = (props) => {

    let users = props.users.map(user => {
        return `${user}; `
    })

    return (
        <div className={classes.users}>
            {users}
        </div>
    )
}

export default LoginUsers