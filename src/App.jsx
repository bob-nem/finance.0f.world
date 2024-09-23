import Footer from './components/footer/Footer'
import BurgerMenu from './components/burgerMenu/BurgerMenu'
import style from './App.module.css'
import { Route, Routes } from "react-router-dom"

import Main from './components/pages/main/main'
import About from './components/pages/about/about'
import Contacts from './components/pages/contacts/contacts'
import Articles from './components/pages/articles/articles'

export default function App() {
  return (
    <div>
      <BurgerMenu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } className={style.burger} />
      <div id="outer-container" className={style.app}>
      <main className={style.main} id="page-wrap">
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <footer className={style.footer}>
        <Footer />
      </footer>
      </div>
      
    </div>
  );
}