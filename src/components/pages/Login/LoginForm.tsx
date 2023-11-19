import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import imgBg from '../../../assets/images/background-login.jpeg';

const LoginForm = () => {
  //State
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  //Behavior
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const userName = target.elements.namedItem("username") as HTMLInputElement;
    navigate(`home/${userName.value}`);
    setUserName("");
  }

  //JSX
  return (
    <LoginFormstyled onSubmit={(e) => handleSubmit(e)}>
      <h1>Bienvenue chez Sport SEE !</h1>
      <p>Connectez vous</p>
      <input
        onChange={(e) => setUserName(e.target.value)}
        name="username"
        value={userName}
        type="text"
        required
        placeholder="Entrez votre prénom" />
      <button type="submit">Accéder à mon espace</button>
    </LoginFormstyled>
  )
}

export default LoginForm

const LoginFormstyled = styled.form`
  display: flex;
  flex-direction: column;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: url(${imgBg}) rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
  }
  p {
    display: flex;
    justify-content: center;
    background-color: #f00;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
  }
  input {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    color: #fff;
    height: 50px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #020203;
    cursor: pointer;
  }
`;