import React from 'react';
import ReactDOM from 'react-dom';
import Calculater from './Calculater'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Calculater />, document.getElementById('root'));
registerServiceWorker();
