import './Main.scss';
type MainTypes={
  children:JSX.Element | JSX.Element[];
}
function Main({children}:MainTypes) {
  return (
    <main className='px-4 max-w-7xl mx-auto min-h-screen'>
      {children}
    </main>
  )
}

export {Main};
