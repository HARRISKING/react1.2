import React from 'react';

class TodoInput extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <input type="text" value={this.props.newTodos}/>
            </div>
        )
    }
}

export default TodoInput;