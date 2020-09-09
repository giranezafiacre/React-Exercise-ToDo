import React, { Component } from 'react';
import propTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
            return {
                background: 'rgb(165, 165, 189)',
                padding: '10px',
                borderBottom: '1px #ccc dotted',
                textDecoration: this.props.todo.completed? 'red dotted line-through' : 'none'
            }
        
    }

    markComplete=(e)=>{
        console.log(this.props)
    }
    render() {
        const { id, title}=this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}/>{ ' '}
                {title}
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        );


    }
}
TodoItem.propTypes = {
    todo: propTypes.object.isRequired
}
const btnStyle={
    background:'red',
    color:'white',
    border:'none',
    padding:'5px 10px',
    borderRadius:'50px',
    float:'right',
    outline:'none'
}
export default TodoItem;