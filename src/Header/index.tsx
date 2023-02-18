import { useState } from "react";
import logo from '../assets/icons/johangly.svg';
import './Header.scss';
import {HamburguerButton} from '../HamburguerButton/index';
import {NavBar} from '../NavBar/index';

function Header(){
  const [showNav,setShowNav] = useState<boolean>(false);
  return (
    <header className="header fixed top-0 left-0 w-full bg-white z-10">
      <div className="wrapper flex justify-between px-4 py-2 items-center max-w-5xl mx-auto">
        <img className="w-14 z-20" src={logo} alt="Johangly sucre logo" title="Johangly sucre logo" aria-hidden="true"/>
        <HamburguerButton showNav={showNav} setShowNav={setShowNav}/>
        <NavBar showNav={showNav} setShowNav={setShowNav}/>
      </div>
    </header>
  );
}

export {Header};

