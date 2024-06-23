import Footer from './components/footer/Footer'
import BurgerMenu from './components/burgerMenu/BurgerMenu';
import style from './App.module.css'
import { Route, Routes } from "react-router-dom";

import Main from './components/pages/main/main';
import Contacts from "./components/pages/contacts/contacts";

export default function App() {
  return (
    <div className={style.app} id="outer-container">
      <BurgerMenu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
      <main className={style.main}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* <Route path="/about/mission" element={<Mission />} /> */}
          {/* <Route path="/about/services" element={<About />} /> */}
        </Routes>
      </main>
      <footer className={style.footer}>
        <Footer />
      </footer>
    </div>
  );
}