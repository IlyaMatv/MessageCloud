import React from 'react';
import './TodoList.css';

class TodoListTitle extends React.Component {

    state = {
        error: false,
        title: ""
    }

    onAddTaskClick = () => {
        let newText = this.state.title
        this.setState({title: ""})
        if (newText === "") {
            this.setState({ error: true })
        } else {
            this.setState({ error: false })
            this.props.onTaskAdded(newText)
        }
    }

    onTitleChanged = (e) => {
        this.setState({
            error: false,
            title: e.currentTarget.value
        })
    }

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.onAddTaskClick()
        }
    }

    render = () => {
        return (
                <h3 className="todoList-header__title">{this.props.title}</h3>
        );
    }
}

export default TodoListTitle;

