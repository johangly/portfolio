import johangly from '../assets/johangly-about.webp'
import { DownloadCV } from '../DowloadCV';
import './About.scss';

function About():JSX.Element {
  return (
    <section id='about' className='flex justify-center lg:items-start items-center pb-40 min-h-[600px] flex-col gap-10 lg:flex-row'>
      <figure className='w-full h-[350px] max-w-[350px] overflow-hidden rounded'>
        <img src={johangly} className="max-h-[500px] h-full w-full object-cover" alt='johangly sucre' title='johangly sucre'/>
      </figure>
      <div className='lg:max-w-[450px] max-w-[350px] flex flex-col items-start justify-center gap-3'>
        <span className='bg-gray px-2 py-2 text-sm font-semibold uppercase font-poppins text-black'>about me</span>
        <h3 className='text-black text-3xl font-bold font-poppins'>Semi-senior Frontend Developer</h3>
        <p className='text-black'>I'm a Frontend Developer, I'm very passionate and dedicated to my work, with 2 years experience as a professional Frontend Developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to design and development.</p>
        <DownloadCV size='full'/>
      </div>
    </section>
  )
}

export {About};
