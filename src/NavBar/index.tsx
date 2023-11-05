import './NavBar.scss';
import { DownloadCV } from '../DowloadCV';
import { useState } from 'react';

type NavBarTypes = {
  showNav:boolean;
  setShowNav:(value: boolean | ((prevVar: boolean) => boolean)) => void;
}

function NavBar({showNav,setShowNav}:NavBarTypes):JSX.Element {

  const [value,setValue]= useState<string>("");

  let html:HTMLHtmlElement | null;
  let body:HTMLBodyElement | null;
  let Home:HTMLBaseElement | null;
  let About:HTMLBaseElement | null;
  let Portfolio:HTMLBaseElement | null;
  let Skills:HTMLBaseElement | null;
  let Contact:HTMLBaseElement | null;

  document.onscroll=()=>{
    if(Home && About && Portfolio && Skills && Contact && html && body){
      let sections:{value:HTMLBaseElement,name:string}[] = [
        {
          value:Home,
          name:'Inicio'
        },
        {
          value:About,
          name:'SobreMí'
        },
        {
          value:Portfolio,
          name:'Portafolio'
        },
        {
          value:Skills,
          name:'Habilidades'
        },
        {
          value:Contact,
          name:'Contacto'
        }
      ];

      for(let i = 0; i < sections.length; i++){
        const section = sections[i];
        let ubication = section.value.getBoundingClientRect();
        let maxScroll = document.documentElement.scrollHeight - html.clientHeight;
        let scrollPosition = html.scrollTop;
        let footerPosition = Contact.getBoundingClientRect();
        
        if(ubication.top <= 200 && Math.abs(ubication.top) <= (ubication.height / 2)){
          if(scrollPosition >= (maxScroll - (footerPosition.height / 2))){
            setValue(`Contacto`)
          }else{
            setValue(`${section.name}`)
          }
        }
      }
    }else{
      html = document.querySelector("html");
      body = document.querySelector("body");
      Home = document.querySelector("#Inicio");
      About = document.querySelector("#SobreMí");
      Portfolio = document.querySelector("#Portafolio");
      Skills = document.querySelector("#Habilidades");
      Contact = document.querySelector("#Contacto");
    }
  }

  const hideNav=()=>{
    setShowNav(!showNav);
  }

  return (
    <nav className={`NavBar ${showNav ? '' : 'translate-x-[100%]'} bg-white transition-[transform] duration-500 ease-out fixed w-full h-full flex justify-center items-center left-0 top-0 lg:static lg:w-auto lg:translate-x-[none]`}>
      <ul className='flex w-full flex-col lg:flex-row'>
        <NavLink hideNavFunc={()=>hideNav()} active={value} name={'Inicio'} route={"#Inicio"}>Inicio</NavLink>
        <NavLink hideNavFunc={()=>hideNav()} active={value} name={'SobreMí'} route={"#SobreMí"}>Sobre Mí</NavLink>
        <NavLink hideNavFunc={()=>hideNav()} active={value} name={'Portafolio'} route={"#Portafolio"}>Portafolio</NavLink>
        <NavLink hideNavFunc={()=>hideNav()} active={value} name={'Habilidades'} route={"#Habilidades"}>Habilidades</NavLink>
        <NavLink hideNavFunc={()=>hideNav()} active={value} name={'Contacto'} route={"#Contacto"}>Contacto</NavLink>
        <li className='flex justify-center items-center mt-5 lg:mt-0 lg:ml-2'>
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
  active:string;
  name:string;
}

function NavLink({hideNavFunc,route,children,active,name}:NavLinkTypes):JSX.Element{
  return (
    <li className='flex justify-center items-center'>
      <a onClick={()=>{hideNavFunc()}} className={` w-4/5 text-xl text-center py-5 relative after:hidden lg:after:block after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:bg-primary after:w-full hover:after:scale-x-100 after:transition-transform after:duration-[200ms] hover:after:shadow-neon after:ease-out lg:w-auto lg:py-3 lg:px-4 lg:text-base ${active === name ? "after:scale-x-100 after:shadow-neon" : "after:scale-x-0"}`} href={route}>{children}</a>
    </li>
  )
}

export {NavBar};
