import React from 'react'
import classes from './Login.module.css'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.input = React.createRef()
    }

    state = {
        count: 0
    }


    onAddName = () => {
        let name = this.input.current.value
        this.input.current.value = ''
        if (name === '') {
            return alert('enter your name')
        }
        this.setState((state) => {
            return {count: state.count + 1}
        })
        alert(`Welcome ${name}`)
    }

    render = () => {
        return (
            <div className={classes.login}>
                <span>{this.state.count}</span>
                <input ref={this.input} type="text" placeholder="your name" />
                <button onClick={this.onAddName}>click!</button>
            </div>
        )

    }
}

export default Login