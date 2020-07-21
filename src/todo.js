import React from 'react';

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            input:""
        }
    }
    render () {
        return(
            <div className="todo">
                <h1>Tasks To do:</h1>
                <ul>
                    {this.state.tasks.map((task,i) =>
                    <li key={i}>
                        {task}
                        <button className="del" data-index={i} onClick={this.finishtask}>X</button>
                    </li>
                    )}
                </ul>
                <br />
                <h5>Unfinished tasks: {this.state.tasks.length}</h5>
                <input onChange={this.handleChange} value={this.state.input}></input> <button onClick={this.addTask}>Add Task</button>
                <button onClick={this.clear}>Clear All</button>
            </div>
        )
    }
    handleChange = (event) => {
        this.setState({
            input: event.target.value
        });
    }
    addTask = () => {
        this.setState(state => ({
            tasks: [...state.tasks, state.input],
            input: ""
        }));
    }
    clear = () => {
        this.setState({
            tasks: [],
        })
    }
    finishtask = (event) => {
        const index = event.target.dataset.index;
        this.setState(state => {
            const tasks = [...state.tasks];
            tasks.splice(index, 1);
            return {
                tasks: tasks
            };
        })
    }
}

export default ToDo;