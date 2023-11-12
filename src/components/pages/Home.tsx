import { useEffect, useState } from 'react'
import { User } from '../../data/user';
import { IUser } from '../../types';

const Home = () => {

  const [data, setData] = useState<IUser[]>([]);

  useEffect(() => {
    setData(User.USER_MAIN_DATA as IUser[]);
  }, []);

  console.log(data);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default Home