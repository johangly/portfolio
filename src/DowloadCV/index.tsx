type DowloadCVTypes = {
  size?:string;
}

function DownloadCV({size='medium'}:DowloadCVTypes):JSX.Element{
  return(
      <a className={`bg-primary text-black w-full capitalize ${size === 'medium' && 'max-w-[300px]'} ${size === 'full' && 'max-w-[500px]'} text-xl text-center py-3 lg:w-auto lg:py-3 lg:px-4 lg:text-base hover:border-2 hover:border-primary hover:bg-white border-2 border-primary hover:text-primary`} target="_blank" rel="noopener" href='#'>Download CV</a>
  )
}

export {DownloadCV};