import React from 'react';
import { FaYoutube, FaTelegram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import style from './Footer.module.css';

class Footer extends React.Component {
  state = {
    curYear : new Date().getFullYear(),
  }
  render() {
    return (
      <div className={style.FooterOverall}>
        <div className={style.FooterCopyright}>
          <p>© Copyright 2024-{this.state.curYear} finsum.of-all.world | All Rights Reserved | Powered by <a href="https://reactjs.org/" rel="noopener">React-JSX</a> | Development by <a href="https://it.for-all.world" rel="noopener">IT_Department</a></p>
        </div>
        <div className={style.FooterSocialIcons}>
          <p>
            we are in social:<span> </span>
            <a href="https://t.me/finance_of_all_world" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaTelegram size="1rem" />
            </a>            
            <a href="https://www.youtube.com/channel/UCnSEy_R1Qa9HMUZ9HvyO1yw" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaYoutube size="1rem" />
            </a>
            <a href="mailto:info@finance.of-all.world" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <IoMdMail size="1rem" />
            </a>
          </p>
        </div>
      </div>
    )
  }
}


export default Footer;
