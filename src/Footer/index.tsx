import linkedin from '../assets/icons/linkedin.svg';
import twitter from '../assets/icons/twitter.svg';
import email from '../assets/icons/email.svg';

function Footer() {
  return (
    <footer id='Contacto' className='bg-black px-10 lg:px-20 py-20'>
      <h5 className='text-center text-4xl font-poppins font-black text-white mb-10'>Creemos el futuro juntos!</h5>
      <div className='flex justify-center items-center gap-5'>
        <a className='hover:scale-150 flex justify-center items-center h-12 w-12 scale-125 transition-all hover:bg-primary rounded-sm mx-2 p-2' rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/johangly-sucre/">
          <img className='h-full w-full' src={linkedin} alt="link to linkedin" title='link to Linkedin'/>
        </a>
        <a className='hover:scale-150 flex justify-center items-center h-12 w-12 scale-125 transition-all hover:bg-primary rounded-sm mx-2 p-2' rel="noreferrer" target="_blank" href="https://twitter.com/Suhangly">
          <img className='h-full w-full' src={twitter} alt="link to twitter" title='link to twitter'/>
        </a>
        <a className='hover:scale-150 flex justify-center items-center h-12 w-12 scale-125 transition-all hover:bg-primary rounded-sm mx-2 p-2' rel="noreferrer" target="_blank" href="mailto:johanglyfabiansucre@gmail.com">
          <img className='h-full w-full' src={email} alt="send me a email" title='send me a email'/>
        </a>
      </div>
    </footer>
  )
}

export {Footer};
