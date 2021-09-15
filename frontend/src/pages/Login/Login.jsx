
import React, { useState, useContext } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { useHistory } from "react-router";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "../Login&Auth/common";
import { Marginer } from "../Login&Auth/marginer";
import { AccountContext } from "../Login&Auth/acountContext";
import { login } from "../../redux/actions/actionCreator";

export default function Login () {
  let history= useHistory()
  
  const { switchToSignup } = useContext(AccountContext);
  const isAuthenticated = useSelector(( authUser ) => authUser);

  const [loginData, setLoginData] = useState({
    email:"",
    password:""
    
  });
 
  
  const dispatch = useDispatch();
  
  function handleLoginClick(event) {
    event.preventDefault();
    dispatch(login(loginData));
    if (isAuthenticated) {
      
      
      history.push('/dashboard')
    }
    
    
  }

    
   
  
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" value ={loginData.email} onChange={(event)=>setLoginData({...loginData, email: event.target.value})} placeholder="Email" />
        <Input type="password"  value ={loginData.password} onChange={(event)=>setLoginData({...loginData, password: event.target.value})} placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton onClick={handleLoginClick} data-textid="submit" type="submit">Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
