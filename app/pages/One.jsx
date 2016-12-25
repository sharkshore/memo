
import React from 'react';
import {connect} from 'react-redux'
import List from '../components/List.jsx'
import {addGoodsType}from '../actions'


class One extends React.Component {

    render() {
        const {newTodos,making,complete} =this.props;
        return (
            <div>
                <List headerText="新建事项" todos={newTodos}/>
                <List headerText="正在进行" todos={making}/>
                <List headerText="已完成" todos={complete}/>
            </div>
        );
    }

}


//定义组件用到的属性,保证组件的稳定性,也可以不定义
One.propTypes = {
};


//1.mapStateToProps
// 将redux的state中一部分数据作为props
const mapStateToProps= (state,ownProps) => {
    return {
        newTodos: calcNew(state),
        making: calcMaking(state),
        complete: calcComplete(state)
    }
}

const calcNew=(state)=>{
   return state.todos.filter((todo)=>todo.status==0)
}

const calcMaking=(state)=>{
    return state.todos.filter((todo)=>todo.status==1)
}

const calcComplete=(state)=>{
    return state.todos.filter((todo)=>todo.status==2)
}


export default connect(mapStateToProps )(One)

