import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { BrowserRouter as Router,Route} from 'react-router-dom';
import store from './stores/store'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App/App';
ReactDOM.render(
    <Provider store={store}>
        <Router> 
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
