import './App.css';
import {Route,Routes} from 'react-router-dom'
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Logos from './components/Logos';
import amber from './images/amber.jpeg';




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
        <img id = 'myPicture' alt ='Amber Jankowski' src ={amber}/>
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
