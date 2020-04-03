import React from 'react'
import classes from './Login.module.css'
import LoginButton from './LoginButton/LoginButton'
import LoginInput from './LoginInput/LoginInput'
import LoginCount from './LoginCount/LoginCount'
import LoginUsers from './LoginUsers/LoginUsers'

class Login extends React.Component {

    state = {
        count: 0,
        users: [],
        title: ''
    }

    onTitleChanged = (e) => {
        this.setState({
            title: e.currentTarget.value
        })
    }

    onAddName = () => {
        let newName = this.state.title
        this.setState({title: ''})
        let usersName = [...this.state.users, newName]
        if (newName === '') {
            return alert('enter your name')
        }
        this.setState((state) => {
            return {
                count: state.count + 1, 
                users: usersName
            }
        })
        alert(`Welcome ${newName}`)
    }

    render = () => {
        
        return (
            <div className={classes.login}>
                <LoginCount count={this.state.count}/>
                <LoginInput value={this.state.title} onTitleChanged={this.onTitleChanged} />
                <LoginButton addName={this.onAddName}/>

                <LoginUsers users={this.state.users}/>
            </div>
        )

    }
}

export default Login