import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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