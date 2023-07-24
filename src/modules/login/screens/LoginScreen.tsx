import { useState } from 'react';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  TitleLogin,
} from '../styles/loginScreen.styles';
import axios from 'axios';

import SVGLogo from '../../../shared/components/icons/SVGLogo';
import { useRequests } from '../../../shared/hooks/useRequests';
import Input from '../../../shared/components/inputs/input/input';
import Button from '../../../shared/components/buttons/button/Button';

const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { postRequest, loading } = useRequests();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    postRequest('http://localhost:8080/auth', {
      email: email,
      password: password,
    });
  };

  return (
    <ContainerLoginScreen>
    <ContainerLogin>
      <LimitedContainer>
      <SVGLogo />
        <Input title="USUÁRIO" margin="32px 0px 0px" onChange={handleEmail} value={email} />
          <Input
            type="password"
            title="SENHA"
            margin="32px 0px 0px"
            onChange={handlePassword}
            value={password}
          />
           <Button loading={loading} type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>
            ENTRAR
          </Button>
      </LimitedContainer>
    </ContainerLogin>
    <BackgroundImage src="./background.png"/>
     </ContainerLoginScreen>
  );
};

export default LoginScreen;
