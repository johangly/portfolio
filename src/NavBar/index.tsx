import './NavBar.scss';
import { DownloadCV } from '../DowloadCV';
type NavBarTypes = {
  showNav:boolean;
  setShowNav:(value: boolean | ((prevVar: boolean) => boolean)) => void;
}

function NavBar({showNav,setShowNav}:NavBarTypes):JSX.Element {
  const hideNav=()=>{
    setShowNav(!showNav);
  }

  return (
    <nav className={`NavBar ${showNav ? '' : 'translate-x-[100%]'} bg-white transition-[transform] duration-500 ease-out fixed w-full h-full flex justify-center items-center left-0 top-0 lg:static lg:w-auto lg:translate-x-[none]`}>
      <ul className='flex w-full flex-col lg:flex-row lg:gap-2'>
        <NavLink hideNavFunc={()=>hideNav()} route={"#home"}>Home</NavLink>
        <NavLink hideNavFunc={()=>hideNav()} route={"#about"}>About</NavLink>
        <NavLink hideNavFunc={()=>hideNav()} route={"#portfolio"}>Portfolio</NavLink>
        <NavLink hideNavFunc={()=>hideNav()} route={"#skills"}>Skills</NavLink>
        <NavLink hideNavFunc={()=>hideNav()} route={"#contact"}>Contact</NavLink>
        <li className='flex justify-center items-center mt-5 lg:mt-0'>
          <DownloadCV size='medium'/>
        </li>
      </ul>
    </nav>
  )
}
type NavLinkTypes = {
  route:string;
  children: JSX.Element | string;
  hideNavFunc:()=> void;
}

function NavLink({hideNavFunc,route,children}:NavLinkTypes):JSX.Element{
  return (
    <li className='flex justify-center items-center'>
      <a onClick={()=>{hideNavFunc()}} className='w-4/5 text-xl text-center py-5 lg:w-auto lg:py-3 lg:px-4 lg:text-base' href={route}>{children}</a>
    </li>
  )
}

export {NavBar};
