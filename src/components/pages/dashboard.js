import React, { Component } from 'react';
import Todos from '../Todos';
import AddTodo from '../addTodo';
import { v4 as uuid } from 'uuid';
import '../../App.css';

class dashboard extends Component {
  state = {
    todos: [{
      id: uuid(),
      title: "workout",
      completed: false
    },
    {
      id: uuid(),
      title: "shower",
      completed: false
    },
    {
      id: uuid(),
      title: "breakfast",
      completed: false
    }

    ]
  }

  markComplete = (id) => {
    // console.log(id)
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  render() {
    return (

      <div className='container'>
          <React.Fragment>
            <AddTodo addTodo={this.addTodo} />
            <Todos todos={this.state.todos} markComplete={this.markComplete}
              delTodo={this.delTodo} />

          </React.Fragment>
      </div>

    );
  }

}

export default dashboard;
