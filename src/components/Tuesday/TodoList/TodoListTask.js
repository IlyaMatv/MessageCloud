import React from 'react';
import './TodoList.css';

class TodoListTask extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({ editMode: true })
    }
    deActivateEditMode = () => {
        this.setState({ editMode: false })
    }

    onIsDoneChanged = (e) => {
        this.props.onTaskStatusChanged(this.props.task.id, e.currentTarget.checked);
    }
    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value);
    }

    render = () => {
        let classIsDone = this.props.task.isDone ? "todoList-task done" : "todoList-task"
        return (
            <div className={classIsDone}>
                <input type="checkbox" checked={this.props.task.isDone}
                    onChange={this.onIsDoneChanged} />
                <span>{this.props.task.id} : </span>
                {
                    this.state.editMode
                        ? <input onChange={this.onTitleChanged} onBlur={this.deActivateEditMode} autoFocus={true} value={this.props.task.title} />
                        : <span onClick={this.activateEditMode}>{this.props.task.title}</span>
                }
                <span> priority - {this.props.task.priority}</span>
            </div>
        );
    }
}

export default TodoListTask;

