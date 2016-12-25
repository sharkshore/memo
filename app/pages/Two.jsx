
import React from 'react';
import {connect} from 'react-redux'
import List from '../components/List.jsx'
import {addGoodsType}from '../actions'


class Two extends React.Component {

    render() {
        const {newTodos} =this.props;
        return (
            <div>
                <List headerText="新建事项" todos={newTodos}/>
            </div>
        );
    }

}


//定义组件用到的属性,保证组件的稳定性,也可以不定义


//1.mapStateToProps
// 将redux的state中一部分数据作为props
const mapStateToProps= (state,ownProps) => {
    return {
        newTodos: calcNew(state),
    }
}


const calcNew=(state)=>{
    return state.todos.filter((todo)=>todo.status==0)
}


export default connect(mapStateToProps )(Two)
