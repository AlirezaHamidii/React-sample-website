import './App.css';
import Header from './header/header';
import Intro from './introduction/introduction';
import SliderContainer from './slider/slider-container';
import Extra from './extra/extra';
import Services from './services/services';
import Parallex from './parallex/parallex';
import Team from './team/team';
import Parallex2 from './parallex/parallex2';
import Contact from './contact/contact';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Intro></Intro>
      <SliderContainer></SliderContainer>
      <Extra></Extra>
      <Services></Services>
      <Parallex></Parallex>
      <Team></Team>
      <Parallex2></Parallex2>
      <Contact></Contact>
    </div>
  );
}

export default App;
