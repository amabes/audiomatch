import React, { Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import TopNav from '../TopNav';
import Slash from './components/Slash';
import { SLASH } from './constants/routes';
import './App.css';

function App() {
  return (
    <HashRouter basename='/'>
      <Fragment>
        {/* <TopNav /> */}
        <div className="container-fluid">
          <Switch>
            <Route exact path={SLASH} component={Slash} />
          </Switch>
        </div>
        {/* <Modals /> */}
        <ToastContainer
          className="text-center"
          position="top-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          // pauseOnFocusLoss
          // draggable
          // pauseOnHover
        />
      </Fragment>
    </HashRouter>
  );
}

export default App;
