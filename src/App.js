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
      <header id='header'>
        <div>
          <h2 id = 'intro'>Hello, my name is <br></br><span className ='intro'>Amber Jankowski</span><br></br> and I'm a <br></br><span className ='intro'>Software Engineer!</span></h2>
       </div>
       <Contact />
      </header>
      <div id ='profileBorder'>
      <div id = 'myAboutMeContainer'>
        <div id ='myPictureContainer'>
        <img id = 'myPicture' alt ='headshot of Amber Jankowski' src ="https://media-exp1.licdn.com/dms/image/C4E03AQE2CIfHJ-xoIQ/profile-displayphoto-shrink_800_800/0/1640115232175?e=1671667200&v=beta&t=GN2fIM9VLBXusGz4Yz-XRLqZ_vRzDhCn7-CXIW4kz9E"/>
        </div>
        <AboutMe />
      </div>
      
      </div>
      <div id='skillsLogoContainer'>
      <Skills />
      <Logos />
      </div>
    
      <Projects />
     
     <footer className ='text'>By Amber Jankowski</footer>
     
      
    </div>
  );
}

export default App;
