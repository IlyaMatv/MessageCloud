import React from 'react'
import classes from './LoginInput.module.css'

class LoginInput extends React.Component {


    state = {
        title: '',
        error: false
    }

    onTitleChanged = (e) => {
        this.setState({
            title: e.currentTarget.value,
            error: false
        })
    }

    onAddName = () => {
        let newName = this.state.title
        this.setState({ title: '' })
        let usersName = [...this.props.users, newName]
        if (newName === '') {
            this.setState({ error: true })
            alert('enter your name')
        } else {
            this.setState(() => {
                return {
                    error: false
                }
            },this.props.addUser(usersName))
            alert(`Welcome ${newName}`)
        }
    }

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.onAddName()
        }
    }


    render = () => {
        
        let classError = this.state.error === true ? classes.error : ''


        return (
            <input className={classError}
                value={this.state.title}
                onKeyPress={this.onKeyPress}
                onChange={this.onTitleChanged}
                type="text" placeholder="your name" />
        )
    }

}

export default LoginInput