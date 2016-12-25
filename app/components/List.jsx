import React from 'react';
import Item from './Item.jsx'

export default class List extends React.Component {

    render() {
        const {todos}=this.props;
        const {headerText} =this.props;
        return (
            <div>
                <h2>{headerText}</h2>
                {
                    todos.map((todo,i)=>{
                        return(
                            <Item todo={todo} key={i}/>
                        )
                    })
                }
            </div>
        );
    }
}

