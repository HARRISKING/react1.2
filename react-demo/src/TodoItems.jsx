import React from 'react';

class TodoItems extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        

        return <div>{this.props.todo.title}</div>
    }
}

export default TodoItems;