import { scaleDown as Menu } from 'react-burger-menu';
import {NavLink} from "react-router-dom";
import {BiMap} from 'react-icons/bi';
import Logo from "../images/noun-hexahedron-1159998.svg";
import './burgerMenu.css';

const BurgerMenu = (props) => {
    return (
        <Menu {...props}>
          <div className='bm-logo'>
            <NavLink to="/"><img src={Logo} alt='logotype'/></NavLink>
          </div>
          <div style={{
            fontSize: '1.2rem',
            marginLeft: '2rem',
          }}>
            <div>
              <NavLink to="/" className={({ isActive }) => isActive ? "bm-item-active" : ""}><BiMap /> Home</NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? "bm-item-active" : ""}><BiMap /> About</NavLink>
              <NavLink to="/articles" className={({ isActive }) => isActive ? "bm-item-active" : ""}><BiMap /> Articles</NavLink>
              <NavLink to="/contacts" className={({ isActive }) => isActive ? "bm-item-active" : ""}><BiMap /> Contacts</NavLink>
            </div>
          </div>
        </Menu>
    );
  };
  
  export default BurgerMenu;