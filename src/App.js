import './App.css';
import {Route,Routes} from 'react-router-dom'
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Logos from './components/Logos';



function App() {
  return (
    <div className="App">
      <h2 id = 'intro'>Hello, my name is <br></br><span>Amber Jankowski</span><br></br> and I'm a <br></br><span>Software Engineer!</span></h2>
      <div id ='profileBorder'>
      <div id = 'myPictureContainer'>
        <img id = 'myPicture' alt ='headshot of Amber Jankowski' src ="https://media-exp1.licdn.com/dms/image/C4E03AQE2CIfHJ-xoIQ/profile-displayphoto-shrink_800_800/0/1640115232175?e=1665619200&v=beta&t=Vq2us8D2L44uNa4xXrgnorTsg_03ib5U0GMu5Yt8sds"/>
        <AboutMe />
      </div>
      
      </div>
      <div id='skillsLogoContainer'>
      <Skills />
      <Logos />
      </div>
    
      <Projects />
     
      <Contact />
     
      
    </div>
  );
}

export default App;
