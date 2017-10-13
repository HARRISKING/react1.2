import React from 'react';
import './TodoItem.css';

class TodoItems extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className='TodoItem'>
                <input type="checkbox"     
                    checked={this.props.todo.status === 'completed'} 
                    onChange={this.toggle.bind(this)}/>
                    <span className='title'>{this.props.todo.title}</span>
                <button onClick={this.delete.bind(this)}>删除</button>
            </div>
        )
    }
    delete(e){
        this.props.onDelete(e,this.props.todo)
    }
    toggle(e){
        this.props.onToggle(e,this.props.todo)
    }
}

export default TodoItems;