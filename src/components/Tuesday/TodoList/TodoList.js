import React from 'react';
import './TodoList.css';
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import AddNewItemForm from './AddNewItemForm';
import TodoListTitle from './TodoListTitle';
import { saveState, restoreState } from '../../../localStorageSave'

class TodoList extends React.Component {

    componentDidMount() {
        let newState = restoreState('our-state', this.state)
        this.setState(newState, () => {
            newState.tasks.forEach(task => {
                if (task.id >= this.nextTaskId) {
                    this.nextTaskId = task.id + 1
                }
            })
        })
    }


    state = {
        tasks: [],
        filterValue: "All"
    };

    nextTaskId = 0



    addTask = (newText) => {
        let newTask = {
            id: this.nextTaskId,
            title: newText,
            isDone: false,
            priority: "low"
        };
        this.nextTaskId++
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        }, () => {
            saveState("our-state", this.state)
        });
    }

    deleteTask = () => {
        this.setState({
            tasks: []
        }, localStorage.removeItem("our-state"))
        this.nextTaskId = 0
    }

    onFilterChanged = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        }, saveState("our-state", this.state));
    }

    changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map(t => {
            if (t.id !== taskId) {
                return t;
            }
            else {
                return { ...t, ...obj };
            }
        });
        this.setState({
            tasks: newTasks
        })
    }


    onTaskStatusChanged = (taskId, isDone) => {
        this.changeTask(taskId, { isDone: isDone })
    }


    onTitleChanged = (taskId, newTitle) => {
        this.changeTask(taskId, { title: newTitle })
    }



    render = () => {


        return (
            <div className="App">
                <div className="todoList">
                    <div className="todoList-header">
                        <TodoListTitle title={this.props.title} />
                        <AddNewItemForm addItem={this.addTask} deleteTask={this.deleteTask} />
                    </div>
                    <TodoListTasks onTaskStatusChanged={this.onTaskStatusChanged}
                        changeTitle={this.onTitleChanged}
                        tasks={this.state.tasks.filter(t => {
                            if (this.state.filterValue === "All") {
                                return true;
                            }
                            if (this.state.filterValue === "Active") {
                                return t.isDone === false;
                            }
                            if (this.state.filterValue === "Completed") {
                                return t.isDone === true;
                            }
                        })} />
                    <TodoListFooter onFilterChanged={this.onFilterChanged} filterValue={this.state.filterValue} />
                </div>
            </div>
        );
    }
}

export default TodoList;


