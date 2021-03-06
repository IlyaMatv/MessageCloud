import React from 'react'
import classes from './Login.module.css'
import LoginAddItem from './LoginAddItem/LoginAddItem'
import LoginCount from './LoginCount/LoginCount'
import LoginUsers from './LoginUsers/LoginUsers'
import LoginDeleteItem from './LoginDeleteItem/LoginDeleteItem'

class Login extends React.Component {

    state = {
        count: 0,
        users: []
    }

    addUser = (newUsers) => {
        this.setState({ count: this.state.count + 1, users: newUsers })
    }

    deleteUser = () => {
        this.setState({count: 0, users: []})
    }

    render = () => {

        return (
            <div className={classes.login}>
                <LoginCount count={this.state.count} />

                <LoginAddItem
                    addUser={this.addUser}
                    count={this.state.count}
                    users={this.state.users}
                />
                <LoginUsers users={this.state.users} />

                <LoginDeleteItem deleteUser={this.deleteUser}/>
            </div>
        )
    }
}

export default Login