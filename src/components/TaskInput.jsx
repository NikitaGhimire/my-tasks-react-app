//Recreating the above code using class component

import React, {Component} from "react";
import Count from "./Count";

class ClassInput extends Component {
	constructor(props){
		super(props); //super method allows to use the props in context to 'this' which refers to the React.component class from which the component inherits
	    //initialises the parent class that is React.Component
	
        this.state = {
        todos: [],
        inputVal: "",
        editIndex: null,
        editVal: '',
        count:0,
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleEditChange = this.handleEditChange.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState((state) => ({
        ...state,
        inputVal: e.target.value,
        }));
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.state.editIndex !== null) {
            this.handleEditSubmit(e);
        } else {
            this.setState((state) => ({
                todos: [...state.todos, state.inputVal],
                inputVal: "",
            }));
        }	
    }

    handleDelete(index){
        this.setState((state) => ({
            todos: state.todos.filter((_, i) => i !== index),
            //filter method is used to create a new array that excludes the task at the specified index
            //It takes 2 parameters: 
            // _ represents teh current element being processes and it is named such to
            //indicate that its not used in the function
            //the second parameter i represents the index of the current element
            //this method checks if the index of the current element is present, if its not present
            //the element is added to the todos array otherwise not. 
            
            }));
    }

    handleEdit(index){
        this.setState({
        editIndex: index,
        editVal: this.state.todos[index],
        });
    }

    handleEditChange(e) {
        this.setState({ editVal: e.target.value });
    }
    
    handleEditSubmit(e) {
        this.setState((state) => {
            const todos = state.todos.slice(); 
            //shallow copy of the todos array is created using slice to avoid directly mutating the state
            todos[state.editIndex] = state.editVal;
            //the task at editIndex is updated with value from editVal
            return {
            //new state obj returned updating the todods array and resetting the proiperties to initial state
                todos,
                editIndex: null,
                editVal: "",
                inputVal: "",
                };
        });
}	
		

render(){
	return (
		<section>
			<h3>{this.props.name}</h3>
			<form onSubmit = {this.handleSubmit}>
				<label htmlFor="task-entry">Enter a task: </label>
					<input 
						type="text"
						id="task-entry"
						value={this.state.editIndex !== null ? this.state.editVal : this.state.inputVal}
                        onChange={this.state.editIndex !== null ? this.handleEditChange : this.handleInputChange}
					/>
					<button type="submit">Submit</button>
					<button type="delete">Delete</button>
			</form>
			<h4> All the tasks! </h4>
				<ul>
				    {this.state.todos.map((todo, index) => (
                        <li key={index}>
                        {todo}
                        <button onClick={() => this.handleEdit(index)}>Edit</button>
                        <button onClick={() => this.handleDelete(index)}>Delete</button>
                        </li>
                    ))}
				</ul>
				<Count count={this.state.todos.length} />
			</section>	);
			};
				
        }
export default ClassInput;