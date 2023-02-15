import linkedin from '../assets/icons/linkedin.svg';
import twitter from '../assets/icons/twitter.svg';
import email from '../assets/icons/email.svg';

function Footer() {
  return (
    <footer id='contact' className='bg-black p-20'>
      <h5 className='text-center text-4xl font-poppins font-black text-white mb-10'>Let's work together</h5>
      <div className='flex justify-center items-center gap-5'>
        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/johangly-sucre/">
          <img src={linkedin} alt="link to linkedin" title='link to Linkedin'/>
        </a>
        <a rel="noreferrer" target="_blank" href="https://twitter.com/Suhangly">
          <img src={twitter} alt="link to twitter" title='link to twitter'/>
        </a>
        <a rel="noreferrer" target="_blank" href="mailto:johanglyfabiansucre@gmail.com">
          <img src={email} alt="send me a email" title='send me a email'/>
        </a>
      </div>
    </footer>
  )
}

export {Footer};
