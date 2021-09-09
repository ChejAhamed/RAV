import React, { useState, useContext } from "react";
import { useSelector, useDispatch  } from "react-redux";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "../Login&Auth/common"
import  {Marginer}  from "../Login&Auth/marginer";
import { AccountContext } from "../Login&Auth/acountContext";
import { signup } from "../../redux/actions/actionCreator";

export function Register() {
  const { switchToSignin } = useContext(AccountContext);
 /* const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  function handleLoginClick(event) {
    event.preventDefault();
    dispatch(login(name));
  }

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }*/
  const [signupData, setSignupData] = useState({
    name:"",
    email:"",
    password:""
  
  });
  const [repetPassword, setRepetPassword] = useState({
    
    password:""
  
  });

  const dispatch = useDispatch();
 
  
  function handleSignupClick(event) {
    if (repetPassword.password===signupData.password){
      event.preventDefault();
    dispatch(signup(signupData));
    console.log(signupData)
    
    } else(
      alert('Both password are not matching')
    )
    
   
  }
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" value ={signupData.name} onChange={(event)=>setSignupData({...signupData, name: event.target.value})} placeholder="Full Name" />
        <Input type="email" value ={signupData.email} onChange={(event)=>setSignupData({...signupData, email: event.target.value})} placeholder="Email" />
        <Input type="password" value ={signupData.password} onChange={(event)=>setSignupData({...signupData, password: event.target.value})} placeholder="Password" />
        <Input type="password"  value={repetPassword.password} onChange={(event)=>setRepetPassword({...repetPassword, password: event.target.value})} placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton onClick={handleSignupClick} type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}