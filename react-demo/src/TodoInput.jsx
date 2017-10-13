import React from 'react';

class TodoInput extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <input type="text" defaultValue={this.props.newTodos} onKeyPress={this.submit.bind(this)}/>
            </div>
        )
    }
    submit(e){
        if(e.key=='Enter'){
            // console.log('我按了回车')
            this.props.onSubmit.call();
        }
    }
}

export default TodoInput;