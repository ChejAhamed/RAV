import React from 'react';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header';
function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
        <Switch>
          <h2>quiz</h2>
          <Route path='/' exact component={Dashboard}/>
          <Redirect path='/dashboard' to='/'/>
          
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
