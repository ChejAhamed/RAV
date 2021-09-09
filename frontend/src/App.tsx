import React from 'react';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import { Provider } from 'react-redux';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard'

import Header from './components/Header/Header';
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Statistics from './pages/Statistics/Statiscs';
import StartQuiz from './pages/StartQuiz/StartQuiz';
import configureStore from './redux/store';

function App() {
  return (
    <Provider store={configureStore()}>
    <BrowserRouter>
      <Header />
        <Switch>
          <Route path='/' exact component={Login}/>
          <Redirect path='/login' to='/'/>
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />

          <Route path="/profile" component={Dashboard} />
          <Route path="/statistics" component={Statistics} />
          <Route path="/startquiz" component={StartQuiz} />
        
          <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
    <Footer />
    </Provider>
  );
}

export default App;
