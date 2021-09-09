import React, { useContext } from "react";
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

export function Register(props) {
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
  const [registerData, setRegisterData] = useState({
    name:"",
    email:"",
    password:""
    
    
  });
  const dispatch = useDispatch();
  const repetPassword="";
  function handleRegisterClick(event) {
    if (repetPassword===password){
    event.preventDefault();
    dispatch(login(loginData));
    
   } else{
     console.log("Please check password")
   }
  }
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" value ={registerData.name} onChange={(event)=>setRegisterData({...registerData, name: event.target.value})} placeholder="Full Name" />
        <Input type="email" value ={registerData.email} onChange={(event)=>setRegisterData({...registerData, email: event.target.value})} placeholder="Email" />
        <Input type="password" value ={registerData.password} onChange={(event)=>setRegisterData({...registerData, password: event.target.value})} placeholder="Password" />
        <Input type="password"  value={repetPassword} placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton onClick={handleRegisterClick} type="submit">Signup</SubmitButton>
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