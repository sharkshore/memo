import React from 'react';
import {connect} from 'react-redux'
import List from '../components/List.jsx'
import {addGoodsType}from '../actions'


class Four extends React.Component {

    render() {
        const {complete} =this.props;
        return (
            <div>
                <List headerText="已完成" todos={complete}/>
            </div>
        );
    }

}


//定义组件用到的属性,保证组件的稳定性,也可以不定义



//1.mapStateToProps
// 将redux的state中一部分数据作为props
const mapStateToProps= (state,ownProps) => {
    return {
        complete: calcComplete(state)
    }
}

const calcComplete=(state)=>{
    return state.todos.filter((todo)=>todo.status==2)
}

export default connect(mapStateToProps )(Four)
