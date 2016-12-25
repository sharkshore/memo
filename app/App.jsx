import React from 'react';
import HeaderBar from './components/HeaderBar.jsx'
import TabBar from './components/TabBar.jsx'
import {connect} from 'react-redux'
import  styles from './App.css'


 class App extends React.Component {
    render() {
        const {count} =this.props;
        return (
            <div className={styles.root}>
                <HeaderBar/>
                <div >
                    <TabBar count={count}/>
                    <div >
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}


//1.mapStateToProps
// 将redux的state中一部分数据作为props
const mapStateToProps = (state, ownProps) => {
    let count= {
        todosCount: calcCount(state),
        newCount: calcNewCount(state),
        makingCount: calcMakingCount(state),
        completeCount: calcCompleteCount(state)
    }
    console.log(count);
    return {
        count
    };
}


const calcCount = (state) => {
    return state.todos.length
}

const calcNewCount = (state) => {
    return state.todos.filter((todo) => todo.status == 0).length
}

const calcMakingCount = (state) => {
    return state.todos.filter((todo) => todo.status == 1).length
}

const calcCompleteCount = (state) => {
    return state.todos.filter((todo) => todo.status == 2).length
}

export default connect(mapStateToProps)(App)




