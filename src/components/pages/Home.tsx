import { useEffect, useState } from 'react'
import { User } from '../../data/user';
import { IUser } from '../../types';
import Header from '../shared/Header/Header';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Sidebar from '../shared/Sidebar/Sidebar';

const Home = () => {
  const { username } = useParams();
  const [data, setData] = useState<IUser[]>([]);

  useEffect(() => {
    setData(User.USER_MAIN_DATA as IUser[]);
  }, []);

  console.log(data);
  console.log("user", username);



  return (
    <HomeStyled>
      <Header />
      <div className="content">
      <Sidebar />
      globalContainer
      <h1>Bonjour <span className="username">{username}</span></h1>
      </div>
    </HomeStyled>
  )
}

export default Home

const HomeStyled = styled.div`
  line-height: 1.5;
  width: 100vw;
  .content {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100%;
 
    .globalContainer {
      width: 100vw;
   
    }
  }
  .username {
    color: #f00;
  } 
`