import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
import configureStore from './app/stores/configureStore.js'

import App from './app/App.jsx';
import One from './app/pages/One.jsx';
import Two from './app/pages/Two.jsx';
import Three from './app/pages/Three.jsx';
import Four from './app/pages/Four.jsx';

const store = configureStore();

ReactDOM.render((
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={One}/>
                    <Route path="/one" component={One}/>
                    <Route path="/two" component={Two}/>
                    <Route path="/three" component={Three}/>
                    <Route path="/four" component={Four}/>
                </Route>
            </Router>
        </Provider>
    ), document.getElementById('app')
)


