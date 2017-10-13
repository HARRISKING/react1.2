import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './Welcome';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';



    ReactDOM.render(
      <div>
        <h1 className='allTitle'>四象限工作法</h1>
        <div className="quadrant-all">
          <App title="重要但不紧急" />
          <App title="重要又急迫" />
          <App title="紧急但不重要" />
          <App title="不紧急也不重要" />
        </div>
        <h3 className='footerTitle'>本程序归HARRISKING所有，侵权必究！</h3>
      </div>,
      document.getElementById('root')
    );
