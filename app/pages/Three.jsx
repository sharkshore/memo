
import React from 'react';
import {connect} from 'react-redux'
import List from '../components/List.jsx'
import {addGoodsType}from '../actions'


class Three extends React.Component {

    render() {
        const {making} =this.props;
        return (
            <div>
                <List headerText="正在进行" todos={making}/>
            </div>
        );
    }

}


//定义组件用到的属性,保证组件的稳定性,也可以不定义


//1.mapStateToProps
// 将redux的state中一部分数据作为props
const mapStateToProps= (state,ownProps) => {
    return {
        making: calcMaking(state),
    }
}

const calcMaking=(state)=>{
    return state.todos.filter((todo)=>todo.status==1)
}




export default connect(mapStateToProps )(Three)
