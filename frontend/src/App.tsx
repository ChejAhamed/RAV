import React from 'react';
import './App.css'
import styled from "styled-components";
import { AccountBox } from "../src/pages/Login&Auth/index";
import LoginRegister from './pages/Login/LoginRegister';
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import { Provider } from 'react-redux';


import Dashboard from './pages/Dashboard/Dashboard'

import Header from './components/Header/Header';
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Statistics from './pages/Statistics/Statistics';
import StartQuiz from './pages/StartQuiz/StartQuiz';
import configureStore from './redux/store';

function App() {
  return (
    <Provider store={configureStore()}>
    <BrowserRouter>
     
  
        
          <Switch> 
          <Route path='/' exact component={LoginRegister}/>
            <div>
            
            <Header /> 
           
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/statistics" component={Statistics} />
          <Route path="/startquiz" component={StartQuiz} />
          
          <Footer />
          </div>
          <Route component={NotFound} />
        </Switch>
          
        
    </BrowserRouter>
    
    </Provider>
  );
}

export default App;
