type CardTypes = {
  title:string;
  text:string;
  image:any;
  textColor:string;
  bgColor:string;
  imgStyle?:string;
  url:string;
}
function Card({title,text,image,textColor,bgColor,imgStyle="",url}:CardTypes) {
  return (
    <a rel="noreferrer" target="_blank" href={url} className={`Card ${bgColor} flex flex-col justify-center items-start max-w-[413px] w-full min-h-[524px] mx-auto lg:mx-none relative
    
    after:hidden lg:after:block after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:bg-primary hover:after:scale-x-100 after:transition-transform after:duration-[200ms] hover:after:shadow-neon after:ease-in after:w-full after:scale-x-0 hover:shadow-neon
    `}>
      <h4 className={`text-2xl font-poppins ${textColor} mt-5 mx-5`}>{title}</h4>
      <p className={`text-1xl font-roboto ${textColor} mt-2 ml-5`}>{text}</p>
      <img src={image} alt={title} className={`object-contain ${imgStyle} mt-auto max-h-[100%] h-[370px]`}/>
    </a>
  )
}

export {Card};

//  lg:py-3 lg:px-4 lg:text-base ${active === children ? "after:w-full after:shadow-neon" : "after:w-[0.01px]