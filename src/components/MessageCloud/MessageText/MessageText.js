import React from 'react'
import classes from './MessageText.module.css'

const MessageText = (props) => {

    return (
        <div className={classes.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsa nesciunt laudantium.
            <div className={classes.time}>21:00</div>
        </div>
    )
}

export default MessageText