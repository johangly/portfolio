import johangly from '../assets/johangly.webp';
import johangly_small from '../assets/johangly-small.webp';
import './Hero.scss';
function Hero():JSX.Element {
  return (
    <section id='home' className='flex justify-center items-center min-h-[850px] flex-col gap-10 lg:flex-row-reverse'>
      <figure className='w-full max-h-[350px] max-w-[350px] w-full relative after:absolute after:content-[""] after:right-[-40px] after:bottom-[-20px] after:bg-primary after:w-full after:h-full after:z-[-1] after:rounded-full after:shadow-neon after:hidden lg:after:block shadow-neon lg:shadow-none rounded-full'>
        <picture>
          <source type='image/webp' srcSet={`${johangly}`} media="(min-width: 1024px)" title='Johangly Sucre'/>
          <img className="max-h-[500px] h-full w-full object-cover rounded-full border-4 lg:border-white border-primary" src={`${johangly_small}`} alt="johangly sucre" title='Johangly Sucre'/>
        </picture>
      </figure>
      <div>
        <h1 className='uppercase lg:text-6xl text-4xl font-black font-poppins text-black relative after:absolute after:content-[""] after:bg-primary after:w-[100px] after:h-[5px] after:left-0 after:bottom-[-7px] after:shadow-neon'>johangly <span className='text-white'>sucre</span></h1>
        <h2 className='font-roboto text-2xl text-black capitalize mt-4'>Frontend developer 💻</h2>
      </div>
    </section>
  )
}
export {Hero};
