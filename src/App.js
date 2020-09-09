import React, { Component } from 'react';
import Header from './components/Layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/about';
// import Todos from './components/Todos';
// import AddTodo from './components/addTodo';
import dashboard from './components/pages/dashboard';
import {v4 as uuid} from 'uuid';
import './App.css';

class App extends Component {
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
      id:uuid(),
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

  addTodo=(title)=>{
    const newTodo={
      id:uuid(),
      title,
      completed:false
    }
    this.setState({todos: [...this.state.todos,newTodo]})
  }
  render() {
    return (
      <Router>
      <div className="App">
      <div className='container'>
        <Header />
        <Route exact path='/' render={props=>[
          <React.Fragment>
          <div className='welcome'>
          <p>Hi there<span role='img' aria-label="👋">👋</span>,Welcome to my app</p>
          </div>
       
      
      </React.Fragment>
    ]}/>
    <Route path='/About' component={About}/>
    <Route path='/ToDo' component={dashboard}/>
    
    </div>
    </div>
      </Router>
      
    );
  }

}

export default App;
