import bookmark from '../assets/bookmark.webp';
import dowa from '../assets/dowa.webp';
import todoApp from '../assets/TodoApp.webp';
import exevi from '../assets/exevi.webp';
import calculatorApp from '../assets/calculatorApp.webp';
import LLT from '../assets/LLT.webp';
import {Card} from '../Card';

function Portfolio():JSX.Element {
  return (
    <section id='portfolio' className='min-h-screen gap-4 pb-40 grid justify-center grid-cols-[minmax(100%,_413px)] lg:grid-cols-[minmax(413px,_413px)_minmax(413px,_413px)]'>
      <Card url='https://johangly.github.io/bookmark-landing-page/' imgStyle="ml-auto" title="Bookmark landing page" text="Landing page with HTML, SASS and javascript." image={bookmark} textColor="text-white" bgColor="bg-purple"/>

      <Card url='https://www.destinyofwar.com/' imgStyle="ml-auto" title="Destiny of war Landing page" text="Professional design and prototyping in Figma, developed using HTML, SASS, Javascript, React for a web3 NFT Game." image={dowa} textColor="text-fullBlack" bgColor="bg-lightOrange"/>
      
      <Card url='https://johangly.github.io/TodoApp/' imgStyle="w-full" title="TodoApp with React" text="App with React, sass, Custom Hooks and neomorphism style" image={todoApp} textColor="text-fullBlack" bgColor="bg-orange"/>

      <Card url='https://johangly.github.io/exevi-fake-website/' imgStyle="w-full" title="Exevi website clone" text="Practice made with HTML SASS and Javascript" image={exevi} textColor="text-fullBlack" bgColor="bg-yellow"/>

      <Card url='https://johangly.github.io/Calculator-app/' imgStyle="w-full object-cover" title="Calculator App" text="Calculator created using HTML, CSS, Javascript and saving calcs history on localStorage" image={calculatorApp} textColor="text-white" bgColor="bg-darkBlue"/>

      <Card url='https://ligalocaldeltigre.netlify.app/' imgStyle="w-full p-4" title="Tournament Landing page" text="Landing page created using HTML, SASS and Javascript." image={LLT} textColor="text-white" bgColor="bg-darkGray"/>

    </section>
  )
}

export {Portfolio};