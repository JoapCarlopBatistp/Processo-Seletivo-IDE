import React, { useRef } from "react";
import Styles from "./Hamburguer.module.css";
import Styles_navbar from '../Navbar.module.css'

export default function Hamburger() {

  const toggleRef = useRef();

  const handleHamburgerMenu = (event) => {
    event.preventDefault();
    toggleRef.current.classList.toggle(Styles.active);

    const x = document.getElementsByClassName(Styles_navbar.link_navbar);
    console.log(x);
    for (let i = 0; i < 4; i++){
      if (x[i].style.display === "flex") {
        x[i].style.display = "none";
      } else {
        x[i].style.display = "flex";
      }
    }
  };

  return (
    <>
      <div
        
        className={Styles.hamburger}
        onClick={handleHamburgerMenu}
        ref={toggleRef}
      ></div>

      <div className={Styles.slider}></div>
    </>
  );
}