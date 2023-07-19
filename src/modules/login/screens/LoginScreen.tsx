import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
} from '../styles/loginScreen.styles';
import Input from '../../../shared/inputs/input/input';

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
    <ContainerLogin>
      <LimitedContainer>
        <LogoImage src="./logo.png" />
        <Input title="USUÁRIO" />
          <Input title="SENHA" />
      </LimitedContainer>
    </ContainerLogin>
    <BackgroundImage src="./background.png"/>
     </ContainerLoginScreen>
  );
};

export default LoginScreen;
