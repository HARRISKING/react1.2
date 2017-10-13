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
            todoList:[],
            newTodo:''
        }
    }

    render(){

        let todos = this.state.todoList.filter((item)=>!item.deleted).map((item,index)=>{
            return (
               <li key={index}>
                    <TodoItems todo={item} 
                    onToggle={this.toggle.bind(this)} 
                    onDelete={this.delete.bind(this)}/>
               </li> 
            )
        })
        return (
            <div className="App">
                <h1>{this.props.title}</h1>
                <TodoInput newTodos={this.state.newTodo} 
                onSubmit={this.addTodo.bind(this)} 
                onChange={this.changeTitle.bind(this)}/>
                <ol>
                    {todos}
                </ol>
            </div>
        )
    }
    delete(event,todo){
        todo.deleted = true;
        this.setState(this.state)
    }

    toggle(e,todo){
        todo.status = todo.status === 'completed' ? '' : 'completed'
        this.setState(this.state)
    }

    changeTitle(event){
        this.setState({
            newTodo: event.target.value,
            todoList: this.state.todoList

        })
    }

    addTodo(event){
        this.state.todoList.push({
            id: idMaker(),
            title: event.target.value,
            status: null,
            deleted: false
        })
        this.setState({
            newTodo: '',
            todoList: this.state.todoList
        })
    }
}
let id = 0;
function idMaker(){
    id += 1;
    return id;
}

export default App;