
import React, { useState, useContext, useEffect } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { Redirect } from "react-router";
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

  const users= useSelector((store)=>store.users)
  console.log(isAuthenticated)
  const [loginData, setLoginData] = useState({
    email:"",
    password:""
    
  });
  console.log("userTOOOOKEN", isAuthenticated)
  
  const toookens= useSelector((store)=>store.tokensReducer)


  
  const dispatch = useDispatch();
  
  function handleLoginClick(event) {
    event.preventDefault();
    console.log("gg",loginData)
    dispatch(login(loginData));
    if (isAuthenticated) {
      localStorage.setItem("userData", JSON.stringify({email: loginData.email, token:  toookens?.token}));
      localStorage.setItem("jwt", toookens?.token )
      console.log("traian",   isAuthenticated)
      console.log("tooookensss  ", toookens?.token)
      history.push('/dashboard')
    }
    
    
  }
  /*dispatch(login(isAuthenticated.user));
    if (isAuthenticated) {
      history.push('/dashboard')
    }
    
    */
    const userLogedd=(isAuthenticated)=>{
      console.log("is loged login",isAuthenticated)
      dispatch(login(isAuthenticated))
     
     }
     userLogedd()
  
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" value ={loginData.email} onChange={(event)=>setLoginData({...loginData, email: event.target.value})} placeholder="Email" />
        <Input type="password"  value ={loginData.password} onChange={(event)=>setLoginData({...loginData, password: event.target.value})} placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton onClick={handleLoginClick} type="submit">Signin</SubmitButton>
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
