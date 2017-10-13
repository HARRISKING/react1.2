import React from 'react';

class TodoInput extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <input type="text" value={this.props.newTodos} onKeyPress={this.submit.bind(this)} onChange={this.changeTitle.bind(this)}/>
    }
    submit(e){
        if(e.key=='Enter'){
            // console.log('我按了回车')
            this.props.onSubmit(e);
        }
    }
    changeTitle(e){
        this.props.onChange(e)
    }
}

export default TodoInput;