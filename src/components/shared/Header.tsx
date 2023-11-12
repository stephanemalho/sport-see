import Logo from '../../assets/images/logo-runner.svg'
import Group from '../../assets/images/Group.svg'
import styled from 'styled-components'
import { links } from './headerLinks'

const Header = () => {
  return (
    <HeaderStyled>
      <div className="logo">
        <img src={Logo} />
        <img src={Group} />
      </div>
      <div className="links">
        {
          links.map((link, index) => (
            <a key={index} href={link.path}>{link.name}</a>
          ))
        }
      </div>
    </HeaderStyled>
  )
}

export default Header

const HeaderStyled = styled.header`
  background-color: #000;
  height: 90px;
  width:100%;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  margin: 0 auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  .logo {
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
    img {
      margin-right: 10px;
    }
  }
  .links {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    align-items: center;
    padding-left: 100px;
    a {
      width: 100%;
      color: #fff;
      text-decoration: none;
      margin-right: 20px;
      font-size: 16px;
      font-weight: 500;
      justify-content: space-between  ;
      &:hover {
        color: #F00;
      }
    }
  }
`