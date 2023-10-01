import './App.css'
import { useState, useEffect } from 'react';
import { User } from './data/user';
import { IUser } from './types';

function App() {
  const [data, setData] = useState<IUser[]>([]);

  useEffect(() => {
    setData(User.USER_MAIN_DATA as IUser[]);
  }, []);

  console.log(data);

  return (
    <>
      <h1>First setup</h1>
    </>
  )
}

export default App