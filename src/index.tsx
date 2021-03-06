import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './pages/carlos/Profile';
import * as serviceWorker from './serviceWorker';
import {configureAmplify} from './service';

configureAmplify();

ReactDOM.render(<Profile />, document.getElementById('root'));

serviceWorker.unregister();