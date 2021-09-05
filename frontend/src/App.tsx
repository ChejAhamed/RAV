import React from 'react';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import configureStore from './redux/store';
function App() {
  return (
    <Provider store={configureStore()}>
    <BrowserRouter>
      <Header />
        <Switch>
          <h2>quiz</h2>
          <Route path='/' exact component={Dashboard}/>
          <Redirect path='/dashboard' to='/'/>
          <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
