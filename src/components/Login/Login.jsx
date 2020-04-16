import React from 'react'
import classes from './Login.module.css'
import LoginButton from './LoginButton/LoginButton'
import LoginInput from './LoginInput/LoginInput'
import LoginCount from './LoginCount/LoginCount'
import LoginUsers from './LoginUsers/LoginUsers'

class Login extends React.Component {

    state = {
        count: 0,
        users: []
    }

    addUser = (newUsers) => {
        this.setState({count: this.state.count + 1, users: newUsers})
    }

    render = () => {

        return (
            <div className={classes.login}>
                <LoginCount count={this.state.count} />

                <LoginInput
                    addUser={this.addUser}
                    count={this.state.count}
                    users={this.state.users}
                // error={this.state.error}
                // className={classes.error}
                // value={this.state.title}
                // onKeyPress={this.onKeyPress}
                // onTitleChanged={this.onTitleChanged} 
                />

                <LoginButton addName={this.onAddName} />
                <LoginUsers users={this.state.users} />
            </div>
        )

    }
}

export default Login