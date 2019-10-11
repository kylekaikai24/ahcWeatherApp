import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store';

import Dashboard from './components/views/dashboard';
import NotFound from './components/views/notFound';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;
