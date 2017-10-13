import React from 'react';
import TodoInput from './TodoInput';
import TodoItems from './TodoItems';
import 'normalize.css';
import './reset.css';
import './App.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todoList:[
                {id:'1',title:'我要做啥',status:'completed',deleted:'false'},
                {id:'2',title:'吃饭',status:'completed',deleted:'false'},
                {id:'3',title:'睡觉',status:'completed',deleted:'false'}
            ],
            newTodo:'test'
        }
    }

    render(){

        let todos = this.state.todoList.map((item,index)=>{
            return <TodoItems todo={item}/>
        })
        return (
            <div className="App">
                <h1>{this.props.title}</h1>
                <TodoInput newTodos={this.state.newTodo} onSubmit={this.addTodo}/>
                <ol>
                    {todos}
                </ol>
            </div>
        )
    }
    addTodo(){
        console.log("我增加了list")
    }
}

export default App;