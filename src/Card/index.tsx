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
    <a rel="noreferrer" target="_blank" href={url} className={`Card ${bgColor} flex flex-col justify-center items-start max-w-[413px] w-full min-h-[524px] mx-auto lg:mx-none`}>
      <h4 className={`text-2xl font-poppins ${textColor} mt-5 ml-5`}>{title}</h4>
      <p className={`text-1xl font-roboto ${textColor} mt-2 ml-5`}>{text}</p>
      <img src={image} alt={title} className={`object-contain ${imgStyle} mt-auto max-h-[100%] h-[370px]`}/>
    </a>
  )
}

export {Card};