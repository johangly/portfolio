import './Main.scss';
type MainTypes={
  children:JSX.Element | JSX.Element[];
}
function Main({children}:MainTypes) {
  return (
    <main className='px-3 max-w-[860px] mx-auto min-h-screen'>
      {children}
    </main>
  )
}

export {Main};
