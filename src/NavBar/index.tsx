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
          name:'Home'
        },
        {
          value:About,
          name:'About'
        },
        {
          value:Portfolio,
          name:'Portfolio'
        },
        {
          value:Skills,
          name:'Skills'
        },
        {
          value:Contact,
          name:'Contact'
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
            setValue(`Contact`)
          }else{
            setValue(`${section.name}`)
          }
        }
      }
    }else{
      html = document.querySelector("html");
      body = document.querySelector("body");
      Home = document.querySelector("#home");
      About = document.querySelector("#about");
      Portfolio = document.querySelector("#portfolio");
      Skills = document.querySelector("#skills");
      Contact = document.querySelector("#contact");
    }
  }

  const hideNav=()=>{
    setShowNav(!showNav);
  }

  return (
    <nav className={`NavBar ${showNav ? '' : 'translate-x-[100%]'} bg-white transition-[transform] duration-500 ease-out fixed w-full h-full flex justify-center items-center left-0 top-0 lg:static lg:w-auto lg:translate-x-[none]`}>
      <ul className='flex w-full flex-col lg:flex-row lg:gap-2'>
        <NavLink hideNavFunc={()=>hideNav()} active={value} route={"#home"}>Home</NavLink>
        <NavLink hideNavFunc={()=>hideNav()} active={value} route={"#about"}>About</NavLink>
        <NavLink hideNavFunc={()=>hideNav()} active={value} route={"#portfolio"}>Portfolio</NavLink>
        <NavLink hideNavFunc={()=>hideNav()} active={value} route={"#skills"}>Skills</NavLink>
        <NavLink hideNavFunc={()=>hideNav()} active={value} route={"#contact"}>Contact</NavLink>
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
  active:string;
}

function NavLink({hideNavFunc,route,children,active}:NavLinkTypes):JSX.Element{
  return (
    <li className='flex justify-center items-center'>
      <a onClick={()=>{hideNavFunc()}} className={` w-4/5 text-xl text-center py-5 relative after:hidden lg:after:block after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:bg-primary hover:after:w-full after:transition-[width] after:duration-[200ms] hover:after:shadow-neon after:ease-out lg:w-auto lg:py-3 lg:px-4 lg:text-base ${active === children ? "after:w-full after:shadow-neon" : "after:w-[0.01px]"}`} href={route}>{children}</a>
    </li>
  )
}

export {NavBar};
