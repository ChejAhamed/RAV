
import React, { useState, useContext } from "react";
import { useSelector, useDispatch  } from "react-redux";
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
  const { switchToSignup } = useContext(AccountContext);
  //const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
 
  const [loginData, setLoginData] = useState({
    email:"",
    password:""
    
  });

  const dispatch = useDispatch();

  function handleLoginClick(event) {
    event.preventDefault();
    dispatch(login(loginData));
    
  }

 /* if (isAuthenticated) {
    return <Redirect to="/" />;
  }*/
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
