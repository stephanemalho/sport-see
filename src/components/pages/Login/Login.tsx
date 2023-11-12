
import LoginForm from './LoginForm'
import Logo from '../../../assets/images/logo-runner.svg';


const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      
    <img src={Logo} />
      <LoginForm />
    </div>
  )
}

export default Login