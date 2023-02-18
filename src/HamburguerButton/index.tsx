import { useState } from "react";
import './HamburguerButton.scss';

type buttonTypes = {
  showNav:boolean;
  setShowNav:(value: boolean | ((prevVar: boolean) => boolean)) => void;
}
function HamburguerButton({showNav,setShowNav}:buttonTypes):JSX.Element{

  const [noAnimation,setNoAnimation] = useState<boolean>(false);

  const changeButtonState = () =>{
    setNoAnimation(true)
    setShowNav(!showNav);
  }

  return(
    <button onClick={changeButtonState} type="button" tabIndex={0} className="button-hamburguer flex lg:hidden" aria-label="open menu">
        <span className={`line-1 ${noAnimation ? '' : 'no-animation'} animated ${showNav && 'animation-1'}`}></span>
        <span className={`line-2 ${noAnimation ? '' : 'no-animation'} animated ${showNav && 'animation-2'}`}></span>
        <span className={`line-3 ${noAnimation ? '' : 'no-animation'} animated ${showNav && 'animation-3'}`}></span>
    </button>
  )
}

export {HamburguerButton};
