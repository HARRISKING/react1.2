import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserDialog from './UserDialog';

// import registerServiceWorker from './registerServiceWorker';



    ReactDOM.render(
      <div>
        <h1 className='allTitle'>四象限工作法</h1>
        <div className="quadrant-all">
          <App title="重要但不紧急" idx='Ab' />
          <App title="重要又急迫" idx='AB' />
          <App title="紧急但不重要" idx='Ba' />
          <App title="不紧急也不重要" idx='ba'/>
          <UserDialog />

        </div>
        <h3 className='footerTitle'>AUTHORED_BY_HARRISKING</h3>
      </div>,
      document.getElementById('root')
    );
