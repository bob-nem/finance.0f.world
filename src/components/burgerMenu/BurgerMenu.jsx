import { scaleDown as Menu } from 'react-burger-menu';
import {NavLink} from "react-router-dom";
import {BiMap} from 'react-icons/bi';
import { MdDomain } from "react-icons/md";
import './burgerMenu.css';

import Logo from "../images/noun-hexahedron-279fdb.svg";

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
              <NavLink to="/" className={({ isActive }) => isActive ? "bm-item-active" : ""}><MdDomain /> Main</NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? "bm-item-active" : ""}><BiMap /> About</NavLink>
              <NavLink to="/articles" className={({ isActive }) => isActive ? "bm-item-active" : ""}><BiMap /> Articles</NavLink>
              <NavLink to="/contacts" className={({ isActive }) => isActive ? "bm-item-active" : ""}><BiMap /> Contacts</NavLink>
            </div>
          </div>
        </Menu>
    );
  };
  
  export default BurgerMenu;