import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION} from './actionTypes'
const defaultState = {
    inputValue: '',
    list: []
};

//默认记事本上什么也不存储
//reducer 可以接受state,但是绝不能修改state

//纯函数指的是给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
export default (state = defaultState,action)=>{
    if(action.type === CHANGE_INPUT_VALUE){
        const newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;  //new Date()  不是固定的输出
        //state.inputValue=action.value;   //有副作用
        return newState;
    }
    if(action.type === ADD_TODO_ITEM){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        console.log(newState);

        return newState;
    }
    if(action.type === DELETE_TODO_ITEM){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        console.log(newState);

        return newState;
    }

    if(action.type === INIT_LIST_ACTION){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list=action.data;
        console.log(newState);

        return newState;
    }

    //console.log(state,action);
    return state;
}



