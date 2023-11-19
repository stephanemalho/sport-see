import styled from "styled-components"
import { sidebarIcons } from "./sidebarIcons"

const Sidebar = () => {
  return (
    <SidebarStyled>
      <div className="icons-container">
        <ul className="icons">
          {sidebarIcons.map((icon, index) => {
            return (
              <li className="list" key={index}><img src={icon.path}/></li>
            )
          }
          )}
        </ul>
      </div>
      <p>copyright sportsee 2020</p>
    </SidebarStyled>
  )
}

export default Sidebar

const SidebarStyled = styled.nav`
  background: #020203;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100px;
  height: 90vh;
  .icons-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    height: 85%;
    width: 50%;
    padding:0;
    margin: auto;
    .icons {
      padding:0;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
      li {
        list-style: none;
        margin: 10px 0;
        background-color: #fff;
        width: 50px;
        height: 50px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        flex-direction: column;
      
      }
    }
  }
  p {
    width: 100%;
    color: #fff;
    font-size: 10px;
    transform: rotate(-90deg);
    white-space: nowrap;
  }
`