import './App.css';
import Header from './component/contact/header/header';
import Intro from './component/contact/introduction/introduction';
import SliderContainer from './component/contact/slider/slider-container';
import Extra from './component/contact/extra/extra';
import Services from './component/contact/services/services';
import Parallex from './component/contact/parallex/parallex';
import Team from './component/contact/team/team';
import Parallex2 from './component/contact/parallex/parallex2';
import Contact from './component/contact/contact/contact';

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
