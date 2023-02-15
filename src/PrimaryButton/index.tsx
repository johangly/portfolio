import React from 'react';
import './PrimaryButton.scss';

interface buttonProps {
  type: string;
  children: JSX.Element | string;
  click:()=>void | null;
}
function PrimaryButton({children,type,click}:buttonProps): JSX.Element | null{
  return(
    <>
      {type === 'download' &&
        <li className='flex justify-center items-center mt-5 lg:mt-0'>
          <a className='bg-primary w-full capitalize max-w-[300px] text-xl text-center py-5 lg:w-auto lg:py-3 lg:px-4 lg:text-base' href='#'>{children}</a>
        </li>
      }
      {type === 'button' &&
        <button onClick={()=>{click()}} className='PrimaryButton bg-primary capitalize w-full max-w-[300px] text-xl text-center py-5 lg:w-auto lg:py-3 lg:px-4 lg:text-base mx-auto'>{children}</button>
      }
    </>
  );
  // return null;
}

export {PrimaryButton};
