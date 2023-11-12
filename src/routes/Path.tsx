import { Route, Routes } from 'react-router-dom'
import Login from '../components/pages/Login/Login'
import Home from '../components/pages/Home'
import ErrorPage from '../components/pages/ErrorPage'

const Path = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home/:userName" element={<Home />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default Path