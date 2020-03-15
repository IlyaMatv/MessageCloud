import React from 'react'
import classes from './NameCmp.module.css'



const NameCmp = (props) => {

    const allQualities = ['буддист', 'контрабандист', 'тракторист']
    const qualities = allQualities.map((el, index) => {
        return (<div key={index} className={index === 1 ? classes.gold : classes.nameItem} >{el}</div>)
    }) 
    


    return (
        <div className={classes.name}>
            <div>Матвейчук Илья</div>
            {qualities}
        </div>
    )
}

export default NameCmp