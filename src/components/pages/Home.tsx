import { useEffect, useState } from 'react'
import { User } from '../../data/user';
import { IUser } from '../../types';
import Header from '../shared/Header';
import styled from 'styled-components';

const Home = () => {

  const [data, setData] = useState<IUser[]>([]);

  useEffect(() => {
    setData(User.USER_MAIN_DATA as IUser[]);
  }, []);

  console.log(data);

  return (
    <HomeStyled>
      <div>
        <Header />
        <h1>Home Page</h1>
      </div>
    </HomeStyled>
  )
}

export default Home

const HomeStyled = styled.div`
  line-height: 1.5;
  width: 100vw
`