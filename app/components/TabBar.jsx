import React from 'react';
import {Link} from 'react-router';
import styles from './css/TabBar.css'

export default class TabBar extends React.Component {

    render() {
        const {count} =this.props;
        return (
            <div className={styles.root}>
                <Link  to="/one" activeClassName={styles.active} className={styles.link}  >全部<span className={styles.num}>{count.todosCount}</span></Link>
                <Link to="/two" activeClassName={styles.active}  className={styles.link} >新建事项<span className={styles.num}>{count.newCount}</span></Link>
                <Link to="/three" activeClassName={styles.active}  className={styles.link} >正在进行<span className={styles.num} >{count.makingCount}</span></Link>
                <Link to="/four" activeClassName={styles.active}  className={styles.link} >已完成<span  className={styles.num}>{count.completeCount}</span></Link>
            </div>
        );
    }
}


