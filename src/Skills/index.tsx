import {Languagues} from './images'
import platzi from '../assets/icons/platzi.svg';

function Skills():JSX.Element {
  return (
    <section id='skills' className='flex justify-center items-center min-h-[600px] flex-col lg:flex-row pb-40'>
      <div className='skills lg:pr-10'>
        <Skill
          title='I have high skills in developing and programming'
          text='I have experience in developing solutions and algorithms, experience in team management and mentoring.'
        />
        <Skill
          title='User experience and user interface skills'
          text='I have a good understanding of the flow of an application and the creation of its design from wireframe to prototype, which is very important for the development of the application.'
        />
        <Skill
          title='I am a platzi student'
          text="I consider myself someone who is curious about technology and knowledge, so I'm always learning new technologies and improving the ones I already know."
          image={platzi}
        />
      </div>
      <div className='languagues flex flex-col justify-center items-center lg:items-start lg:pl-10 gap-8 lg:border-l-[1px] border-separatorColor'>
        <div>
          <span className='font-poppins text-2xl text-black block text-center lg:text-left mb-3 capitalize font-black'>Languages</span>
          <div className='flex justify-center items-center gap-5'>
            <Languague title="html" image={Languagues.html}/>
            <Languague title="javascript" image={Languagues.javascript}/>
            <Languague title="css" image={Languagues.css}/>
          </div>
        </div>
        <div>
          <span className='font-poppins text-2xl text-black block text-center lg:text-left mb-3 capitalize font-black'>Preprocessors</span>
          <div className='flex justify-center items-center gap-5'>
            <Languague title="sass" image={Languagues.sass}/>
            <Languague title="typescript" image={Languagues.typescript}/>
          </div>
        </div>
        <div>
          <span className='font-poppins text-2xl text-black block text-center lg:text-left mb-3 capitalize font-black'>Frameworks / librarys</span>
          <div className='flex justify-center items-center gap-5'>
            <Languague title="bootstrap" image={Languagues.bootstrap}/>
            <Languague title="tailwind" image={Languagues.tailwind}/>
            <Languague title="react" image={Languagues.react}/>
          </div>
        </div>
        <div>
          <span className='font-poppins text-2xl text-black block text-center lg:text-left mb-3 capitalize font-black'>Tools</span>
          <div className='flex justify-center items-center gap-5'>
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
    <div className='max-w-[386px] mb-7'>
      <h5 className='font-poppins text-2xl text-black font-black mb-4 flex justify-start items-center flex-wrap'>
        {title}{image && 
        <img className='hidden min-[332px]:block w-[35px] h-[35px] ml-3' alt={title} src={image} title={title} />}
      </h5>
      <p className='font-roboto text-black'>{text}</p>
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
      <span className='uppercase text-black font-roboto text-base font-medium mt-2'>{title}</span>  
    </div>
  )
}

export {Skills};