import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './Welcome';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';



    ReactDOM.render(
      <div className="quadrant-all">
        <App title="重要但不紧急" />
        <App title="重要又急迫" />
        <App title="紧急但不重要" />
        <App title="不紧急也不重要" />
      </div>,
      document.getElementById('root')
    );
