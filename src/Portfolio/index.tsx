import bookmark from '../assets/bookmark.webp';
import dowa from '../assets/dowa.webp';
import todoApp from '../assets/TodoApp.webp';
import exevi from '../assets/exevi.webp';
import calculatorApp from '../assets/calculatorApp.webp';
import LLT from '../assets/LLT.webp';
import {Card} from '../Card';

function Portfolio():JSX.Element {
  return (
    <section id='Portafolio' className='min-h-screen gap-4 pb-40 grid justify-center grid-cols-[minmax(100%,_413px)] lg:grid-cols-[minmax(413px,_413px)_minmax(413px,_413px)]'>
      <Card url='https://johangly.github.io/bookmark-landing-page/' imgStyle="ml-auto" title="Bookmark landing page" text="Landing page con HTML, SASS y javascript." image={bookmark} textColor="text-white" bgColor="bg-purple"/>

      <Card url='https://www.destinyofwar.com/' imgStyle="ml-auto" title="Destiny of war Landing page" text="Diseño y prototipado profesional en Figma, desarrollado utilizando HTML, SASS, JavaScript y React para un juego web3 de NFT." image={dowa} textColor="text-fullBlack" bgColor="bg-lightOrange"/>
      
      <Card url='https://johangly.github.io/TodoApp/' imgStyle="w-full" title="TodoApp con React" text="App con React, sass y Custom Hooks" image={todoApp} textColor="text-fullBlack" bgColor="bg-orange"/>

      <Card url='https://johangly.github.io/exevi-fake-website/' imgStyle="w-full" title="Clon web de Exevi" text="Practica realizada con HTML SASS y Javascript" image={exevi} textColor="text-fullBlack" bgColor="bg-yellow"/>

      <Card url='https://johangly.github.io/Calculator-app/' imgStyle="w-full object-cover" title="Aplicacion de calculadora" text="Calculadora creada usando HTML, CSS y Javascript, con historial de calculos en Local Storage" image={calculatorApp} textColor="text-white" bgColor="bg-darkBlue"/>

      <Card url='https://ligalocaldeltigre.netlify.app/' imgStyle="w-full p-4" title="Web de Torneos de Videojuegos" text="Web creada usando HTML, SASS y Javascript." image={LLT} textColor="text-white" bgColor="bg-darkGray"/>

    </section>
  )
}

export {Portfolio};