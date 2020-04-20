import React from 'react'
import classes from './Monday.module.css'
import NameCmp from './NameCmp/NameCmp'
import MessageCloud from './MessageCloud/MessageCloud'
import Login from './Login/Login'

const Monday = (props) => {

    return (
        <div className={classes.wrap}>

            <NameCmp />
            <MessageCloud />
            <Login />

            
        </div>
    )
}

export default Monday