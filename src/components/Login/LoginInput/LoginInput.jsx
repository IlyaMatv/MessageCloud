import React from 'react'
// import classes from './LoginInput.module.css'

const LoginInput = (props) => {

    return (
        <div>
            <input value={props.value} onChange={props.onTitleChanged} type="text" placeholder="your name" />
        </div>
    )
}

export default LoginInput