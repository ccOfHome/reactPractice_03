import React, { Component } from 'react';
import 'antd/dist/antd.css';
//import { Input, Button, List} from 'antd';
import store from './store'; ///index.js
//import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './store/actionTypes'
import {getInputChangeAction,getAddItemAction,getDeleteItemAction,initListAction,getTodoList,getInitList} from './store/actionCreators'

import TodoListUI from './TodoListUI'

// const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
// ];

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        console.log(this.state);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        //订阅了store的改变
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return <TodoListUI 
            inputValue={this.state.inputValue} 
            list={this.state.list} 
            handleInputChange={this.handleInputChange} 
            handleBtnClick={this.handleBtnClick}
            handleItemDelete={this.handleItemDelete}
        />
    }

    componentDidMount(){
        // axios.get('/list.json').then((res)=>{
        //     const data=res.data;
        //     const action=initListAction(data);

        //     store.dispatch(action);
        // })

        /*  使用Redux-thunk中间件
        const action=getTodoList();
        console.log(action);
        store.dispatch(action);
        */

        const action=getInitList();
        store.dispatch(action);
    }

    handleInputChange(e) {
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // }
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action);
    }
    handleStoreChange() {
        this.setState(store.getState());
    }
    handleBtnClick(){
        // const action={
        //     type: ADD_TODO_ITEM
        // }
        const action = getAddItemAction();
        store.dispatch(action);

    }
    handleItemDelete(index){
        // const action={
        //     type: DELETE_TODO_ITEM,
        //     index
        // }
        const action=getDeleteItemAction(index);
        store.dispatch(action);
    }
}

export default TodoList;

