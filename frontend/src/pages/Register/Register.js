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
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text"  placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Signup</SubmitButton>
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