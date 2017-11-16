import React from 'react';
import TodoInput from './TodoInput';
import TodoItems from './TodoItems';
import 'normalize.css';
import './reset.css';
import './App.css';
import * as localStore from './localStore';

import AV from './leanCloud'



// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'harriskingsdfdsfdsfds!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })



// var TodoFolder = AV.Object.extend('TodoFolder');
// var todoFolder =  new TodoFolder();

// todoFolder.set('name','工作');
// todoFolder.set('priority','1');
// todoFolder.save().then(function(todo){
//     console.log('objectID is'+ todo.id);
// },function (error){
//     console.error(error);
// });


var TestObject = AV.Object.extend('TestObject');

var number = 34523423423;
var strings = '我的随手输入的数字是'+number;
var date = new Date();
var arr = [strings,number];
var object = {
    number:number,
    str : strings,
    date : date
}
var testObject = new TestObject();
testObject.set('testNumber',number);
testObject.set('testString',strings);
testObject.set('testDate',date);
testObject.set('testObject',object);

testObject.save().then(function(testObject){
    console.log("success")
},function(error){
    console.log(error)
})








class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            todoList:localStore.load(this.props.idx) || [],
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
                <ol className='todoList'>
                    {todos}
                </ol>
            </div>
        )
    }

    componentDidUpdate(){
        localStore.save(this.props.idx, this.state.todoList)
    }

    delete(event,todo){
        todo.deleted = true;
        this.setState(this.state);
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
        if(event.target.value){
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
}
let id = 0;
function idMaker(){
    id += 1;
    return id;
}

export default App;