import johangly from '../assets/johangly-about.webp'
import { DownloadCV } from '../DowloadCV';
import './About.scss';

function About():JSX.Element {
  return (
    <section id='about' className='flex justify-center lg:items-start items-center pb-40 min-h-[600px] flex-col gap-10 lg:flex-row'>
      <figure className='w-full h-[350px] max-w-[350px] overflow-hidden rounded'>
        <img src={johangly} className="max-h-[500px] h-full w-full object-cover" alt='johangly sucre' title='johangly sucre'/>
      </figure>
      <div className='max-w-[400px] flex flex-col items-start justify-center gap-3'>
        <span className='bg-gray px-3 py-3 font-semibold uppercase font-poppins text-black'>about me</span>
        <h3 className='text-black text-3xl font-bold font-poppins'>Semi-senior frontend developer</h3>
        <p className='text-black'>I’m Frontend Developer, and i’m very passionate and dedicated to my work, With 2 years experience as a professional frontend developer, i have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussions and collaboration.</p>
        <DownloadCV size='full'/>
      </div>
    </section>
  )
}

export {About};
