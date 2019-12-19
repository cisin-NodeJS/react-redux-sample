import React, { Suspense } from 'react';
import './App.css';
import { routes } from './route';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export default function App() {

  return <>
    <Suspense fallback={<div>Loading...</div>}>
      <ToastContainer />
      <Router>
        <Switch>
          {
            routes.map((route, key) =>
              <Route key={key} path={route.path} name={route.name} exact={route.exact} render={props => (
                <route.middleware {...props}>
                  <route.component {...props} />
                </route.middleware>
              )} />
            )
          }
        </Switch>
      </Router>
    </Suspense>
  </>
}
