//Recreating the above code using class component

import React, {Component} from "react";

class ClassInput extends Component {
	constructor(props){
		super(props); //super method allows to use the props in context to 'this' which refers to the React.component class from which the component inherits
	    //initialises the parent class that is React.Component
	
        this.state = {
        inputVal: "",
        dueDate: "",
        priority: "normal", // Add priority state
        editIndex: null,
        editVal: '',
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            inputVal: e.target.value
        });
    }

    handleDateChange(e) {
        this.setState({
            dueDate: e.target.value
        });
    }

    // Add priority handler
    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.state.inputVal.trim()) {
            const task = {
                text: this.state.inputVal,
                dueDate: this.state.dueDate,
                priority: this.state.priority,
                completed: false,
                id: Date.now()
            };
            this.props.onAddTodo(task);
            this.setState({
                inputVal: "",
                dueDate: "",
                priority: "normal"
            });
        }
    }

render() {
    return (
        <section className="task-input-section">
            <h4>{this.props.name}</h4>
            <form onSubmit={this.handleSubmit} className="task-form">
                <div className="input-group">
                    <label htmlFor="task-entry">Task Description:</label>
                    <input 
                        type="text"
                        id="task-entry"
                        value={this.state.inputVal}
                        onChange={this.handleInputChange}
                        placeholder="Enter your task"
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="due-date">Due Date:</label>
                    <input 
                        type="date"
                        id="due-date"
                        value={this.state.dueDate}
                        onChange={this.handleDateChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="priority">Priority:</label>
                    <select
                        id="priority"
                        value={this.state.priority}
                        onChange={this.handlePriorityChange}
                        className="priority-select"
                    >
                        <option value="low">Low</option>
                        <option value="normal">Normal</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <button type="submit" className="btn-primary">Add Task</button>
            </form>
        </section>
    );
}
				
        }
export default ClassInput;