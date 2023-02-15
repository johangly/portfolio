import './App.scss';
import {Header} from './Header/index';
import {Main} from './Main/index';
import {Footer} from './Footer/index';
import {Hero} from './Hero/index';
import {About} from './About/index';
import {Portfolio} from './Portfolio/index';
import {Skills} from './Skills/index';

function App() {
  return (
    <div className="App min-h-screen">
      <Header/>
      <Main>
        <Hero/>
        <About/>
        <Portfolio/>
        <Skills/>
      </Main>
      <Footer/>
    </div>
  );
}

export default App;
