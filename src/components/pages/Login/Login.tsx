
import LoginForm from './LoginForm'
import Logo from '../../../assets/images/logo-runner.svg';
import styled from 'styled-components';

const Login = () => {
  return (
    <LoginStyled>
      <h1>Runner's</h1>
      <img src={Logo} />
      <LoginForm />
    </LoginStyled>
  )
}

export default Login

const LoginStyled = styled.div`
  color: #fff;
  line-height: 1.5;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  img {
    margin-right: 10px;
    height: 50px;
    width: 50px;
  }
`