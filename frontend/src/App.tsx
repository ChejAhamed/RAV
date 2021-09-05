import React from 'react';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import { Provider } from 'react-redux';
import Dashboard from './pages/Dashboard/Dashboard'
import Header from './components/Header/Header';
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import configureStore from './redux/store';
function App() {
  return (
    <Provider store={configureStore()}>
    <BrowserRouter>
      <Header />
        <Switch>
          
          <Route path='/' exact component={Dashboard}/>
          <Redirect path='/dashboard' to='/'/>
          <Route path="/profile" component={Profile} />
          <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
    <Footer />
    </Provider>
  );
}

export default App;
