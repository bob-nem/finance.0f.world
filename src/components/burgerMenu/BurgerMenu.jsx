import { scaleDown as Menu } from 'react-burger-menu';
import {NavLink} from "react-router-dom";
import {BiMap} from 'react-icons/bi';
import { GrInfo, GrCpu, GrCatalog, GrCodeSandbox } from "react-icons/gr";
import './burgerMenu.css';

const BurgerMenu = (props) => {
    return (
        <Menu {...props}>
          <div className='bm-logo'>
            <NavLink to="/">
              <GrCodeSandbox style={{ fontSize: '6rem' }}/>
              <h2 style={{ display: 'flex', fontSize: '2rem', lineHeight: '0', textWrap: 'wrap'}}>Finances</h2>
            </NavLink>
          </div>
          <div style={{
            fontSize: '2rem',
            marginTop: '.75rem',
            marginLeft: '.2rem',
          }}>
            <div>
              <NavLink to="/" className={({ isActive }) => isActive ? "bm-item-active" : ""}><GrCpu /> Main</NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? "bm-item-active" : ""}><GrInfo /> About</NavLink>
              <NavLink to="/articles" className={({ isActive }) => isActive ? "bm-item-active" : ""}><GrCatalog /> Articles</NavLink>
              <NavLink to="/contacts" className={({ isActive }) => isActive ? "bm-item-active" : ""}><BiMap /> Contacts</NavLink>
            </div>
          </div>
        </Menu>
    );
  };
  
  export default BurgerMenu;