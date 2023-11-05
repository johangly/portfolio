import {Languagues} from './images'
import platzi from '../assets/icons/platzi.svg';

function Skills():JSX.Element {
  return (
    <section id='Habilidades' className='flex items-center lg:items-stretch justify-between min-h-[600px] flex-col lg:flex-row pb-40 gap-y-12 lg:gap-y-0'>
      <div className='skills flex flex-col gap-y-6'>
        <Skill
          title='Habilidades avanzadas en desarrollo y programación'
          text='Tengo experiencia en desarrollar soluciones y algoritmos, así como experiencia en gestión de equipos y mentoría.'
        />
        <Skill
          title='Habilidades en experiencia de usuario e interfaz de usuario'
          text='Tengo un buen entendimiento del flujo de una aplicación y la creación de su diseño desde el wireframe hasta el prototipo, lo cual es crucial para el desarrollo de una aplicación.'
        />
        <Skill
          title='Estudiante en Platzi'
          text="Me considero una persona curiosa acerca de la tecnología y el conocimiento, siempre estoy aprendiendo nuevas tecnologías y mejorando en las que ya conozco."
          image={platzi}
        />
      </div>
      <div className='border-separatorColor w-[1px] h-full-screen bg-coolGray-300 hidden lg:block'></div>
      <div className='languagues flex flex-col justify-center items-center lg:items-start gap-6'>
        <div className='max-w-[350px]'>
          <span className='font-poppins text-2xl text-black block text-center lg:text-left mb-3 capitalize font-black'>Tecnologías</span>
          <div className='flex justify-center lg:justify-start items-center gap-3 flex-wrap'>
            <Languague title="html" image={Languagues.html}/>
            <Languague title="javascript" image={Languagues.javascript}/>
            <Languague title="css" image={Languagues.css}/>
            <Languague title="php" image={Languagues.php}/>
            <Languague title="node Js" image={Languagues.nodejs}/>
            <Languague title="python" image={Languagues.python}/>
          </div>
        </div>
        <div>
          <span className='font-poppins text-2xl text-black block text-center lg:text-left mb-3 capitalize font-black'>Preprocesadores</span>
          <div className='flex justify-center lg:justify-start items-center gap-3 '>
            <Languague title="sass" image={Languagues.sass}/>
            <Languague title="typescript" image={Languagues.typescript}/>
          </div>
        </div>
        <div>
          <span className='font-poppins text-2xl text-black block text-center lg:text-left mb-3 capitalize font-black'>Frameworks / Librerías</span>
          <div className='flex justify-center lg:justify-start items-center gap-3 '>
            <Languague title="bootstrap" image={Languagues.bootstrap}/>
            <Languague title="tailwind" image={Languagues.tailwind}/>
            <Languague title="react" image={Languagues.react}/>
          </div>
        </div>
        <div>
          <span className='font-poppins text-2xl text-black block text-center lg:text-left mb-3 capitalize font-black'>Herramientas</span>
          <div className='flex justify-center lg:justify-start items-center gap-3 '>
            <Languague title="git" image={Languagues.git}/>
          </div>
        </div>
      </div>
    </section>
  )
}

type skillTypes = {
  title:string;
  text:string;
  image?:any;
}

function Skill({title,text,image}:skillTypes){
  return(
    <div className='max-w-[386px]'>
      <h5 className='font-poppins text-2xl text-black font-black mb-3 flex justify-center items-center flex-wrap text-center'>
        {title}{image && 
        <img className='hidden min-[332px]:block w-[35px] h-[35px] ml-3' alt={title} src={image} title={title} />}
      </h5>
      <p className='font-roboto text-black text-center leading-6'>{text}</p>
    </div>
  )
}

type languagueTypes = {
  title:string;
  image:any;
}

function Languague({title,image}:languagueTypes){
  return(
    <div className='flex justify-center items-center flex-col'>
      <figure className='w-[72px] h-[72px]'>
        <img className='w-full' src={image} alt={title} title={title}/>
      </figure>
      <span className='uppercase text-black font-roboto text-base font-medium mt-3'>{title}</span>  
    </div>
  )
}

export {Skills};