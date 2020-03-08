import React from 'react'
import classes from './MessageCloud.module.css'
import Name from './Name/Name'
import MessageText from './MessageText/MessageText'

const MessageCloud = (props) => {

    return (
        <div className={classes.message}>
            <Name />
            <MessageText />
        </div>
    )
}

export default MessageCloud