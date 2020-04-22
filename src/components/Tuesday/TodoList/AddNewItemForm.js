import React from 'react';
import './TodoList.css';

class AddNewItemForm extends React.Component {

    state = {
        error: false,
        title: ""
    }

    onAddItemClick = () => {
        let newText = this.state.title
        this.setState({ title: "" })
        if (newText === "") {
            this.setState({ error: true })
        } else {
            this.setState({ error: false })
            this.props.addItem(newText)
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
            this.onAddItemClick()
        }
    }

    render = () => {

        return (

            <div className="addNewItemForm">
                <input className={this.state.error ? "error" : ""}
                    onKeyPress={this.onKeyPress}
                    type="text" placeholder="New item name"
                    onChange={this.onTitleChanged}
                    value={this.state.title}
                />
                <button onClick={this.onAddItemClick}>Add</button>
                <button onClick={this.props.deleteTask}>delete</button>
            </div>
        );
    }
}

export default AddNewItemForm;

