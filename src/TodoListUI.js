import React, { Component } from 'react';
import { Input, Button, List } from 'antd';

//无状态组件(就是一个函数)---性能比较高
const TodoListUI = (props) => {
    return (
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
            <div>
                <Input onChange={props.handleInputChange} value={props.inputValue} placeholder="todo info" style={{ width: '300px', marginRight: '10px' }} />
                <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
            </div>
            <List
                style={{ marginTop: '10px', width: '300px' }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => <List.Item onClick={() => { props.handleItemDelete(index) }}>{item}</List.Item>}
            />
        </div>
    )
}

// // js类 生命周期函数 render
// class TodoListUI extends Component {
//     render() {
//         return (
//             <div style={{ marginTop: '10px', marginLeft: '10px' }}>
//                 <div>
//                     <Input onChange={this.props.handleInputChange} value={this.props.inputValue} placeholder="todo info" style={{ width: '300px', marginRight: '10px' }} />
//                     <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//                 </div>
//                 <List
//                     style={{ marginTop: '10px', width: '300px' }}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => <List.Item onClick={(index) => { this.props.handleItemDelete(index) }}>{item}</List.Item>}
//                 />
//             </div>
//         )
//     }
// }


export default TodoListUI;
