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
              <NavLink to="/contacts" activeClassName="bm-item-active"><BiMap /> Contacts</NavLink>
            </div>
          </div>
        </Menu>
    );
  };
  
  export default BurgerMenu;