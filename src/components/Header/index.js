import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import NavHeaderMobile from "../NavHeaderMobile";
import { useState } from "react";

function Header(){

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => { setIsNavOpen(!isNavOpen); };

  return(
    <header className={styles.header}>
      <Link to="/">
        <span>GB Movies</span>
      </Link>
      <nav className={styles.navDesktop} >
        <Link to="/"> Home </Link>
        <Link to="/favorites"> Favorites </Link>
        <Link to="/search"> Search </Link>
        <Link to="/addVideo">Add Video</Link>
      </nav>
      <div onClick={toggleNav} className={styles.menuHamburguer}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <NavHeaderMobile isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
    </header>
  );
}

export default Header;
