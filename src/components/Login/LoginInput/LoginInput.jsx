import React from 'react'
// import classes from './LoginInput.module.css'

const LoginInput = (props) => {

    return (
            <input value={props.value} onChange={props.onTitleChanged} type="text" placeholder="your name" />
    )
}

export default LoginInput