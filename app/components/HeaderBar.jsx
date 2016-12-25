import React from 'react';
import {connect} from 'react-redux'
import {addTodo,deleteTodo,updateTodo}from '../actions'

import styles from './css/HeaderBar.css'

class HeaderBar extends React.Component {

    handleSubmit(e){
        e.preventDefault();
        let value=this.refs.text.value;
        this.props.addTodo(
            {
                text:value,
                status:0
            }
        )
        this.refs.text.value='';
    }

    render() {
        return (
            <div className={styles.root}>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <span className={styles.title}>备忘录</span>
                    <input className={styles.input} type="text" ref="text" placeholder="新建事项,20字以内"/>
                    <input type="submit" value={'添加'} className={styles.button}/>
                    <input type="button" value={'搜索'} className={styles.button}/>
                </form>
            </div>
        );
    }
}


const mapDispatchToProps = {
    addTodo: (todo) => addTodo(todo)
}

export default connect(()=>{return {}},mapDispatchToProps)(HeaderBar)
