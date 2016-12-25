import React from 'react';
import {connect} from 'react-redux'
import {addTodo,deleteTodo,updateTodo}from '../actions'
import styles from './css/Item.css'

class Item extends React.Component {

    handleDelete(todo){
        this.props.deleteTodo(todo)
    }
    handleUpdate(todo){
        this.props.updateTodo(todo)
    }
    render() {
        const {todo} =this.props;
        let checked;
        if(todo.status==0){
            checked=false;
        }else {
            checked=true;
        }
        return (
            <div className={styles.root} >
                <input className={styles.input} type="checkbox" defaultChecked={checked} />
                <span className={styles.span} onClick={this.handleUpdate.bind(this,todo)} >{todo.text}</span>
                <input type="button" value={'删除'} onClick={this.handleDelete.bind(this,todo)} className={styles.button}/>
            </div>
        );
    }
}


const mapDispatchToProps = {
    deleteTodo: (todo) => deleteTodo(todo),
    updateTodo:(todo)=>updateTodo(todo)
}

export default connect(()=>{return {}},mapDispatchToProps)(Item)
