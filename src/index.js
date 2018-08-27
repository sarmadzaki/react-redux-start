import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './stores/store'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Posts from './components/Post/Posts';
import Home from './components/Home';
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/post" component={Posts} />
                <Route  path="/home" component={Home} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
