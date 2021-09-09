import "../Login/LoginRegister.css";
import styled from "styled-components";
import { AccountBox } from "../Login&Auth";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function LoginRegister() {
  return (
    <AppContainer>
      <AccountBox />
    </AppContainer>
  );
}

export default LoginRegister;