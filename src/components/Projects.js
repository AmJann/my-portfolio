import React from 'react'
import restaurantFinder from '../images/restaurantFinder.png'
import jellyJam from '../images/jellyJam.png'
import hangman from '../images/hangmanScreenshot.png'
import stockWatch from '../images/stockWatch.png'

function Projects() {
  return (
    <div>
        <h2 id='projectTitle'className ='text'>Projects</h2>
            <div id = 'projectsContainer'>

                <div className ='projectImgContainer'>

                    {/* Restaurant Finder */}
                    <div className ='project'>   
                     <h3 className ='projectTitle text projectTitleB'>Restaraunt Finder</h3>
                        <a href='https://challenge4-yelp.onrender.com/' target="_blank" rel="noreferrer">
                            <img class='projectImg' alt='screenshot of app' src ={restaurantFinder}/>
                        </a> 
                        <div className ='projectDescription'>
                        <p className ='text'>Restaurant search app and suggestion generator. Utilizes <strong>React Redux</strong>, <strong>Django Rest Framework</strong>, <strong>PostgreSQL</strong> database, <strong>CSS3</strong> and geolocation.Completed with a team I lead in a five day sprint. </p>
                        </div>
                    <br></br>
                    
                        <a className='githubButton text' href ='https://github.com/AmJann/restaurant-finder' target="_blank" rel="noreferrer">GitHub Repo</a>
                
                     </div>

                    {/* Hangman */}
                    <div className ='project'>   
                     <h3 className ='projectTitle text projectTitleB'>Hangman!</h3>
                        <a href='https://hangman-team58.onrender.com/' target="_blank" rel="noreferrer">
                            <img class='projectImg' alt='screenshot of app' src ={hangman}/>
                        </a> 
                        <div className ='projectDescription'>
                        <p className ='text'>
                            Classic Hangman game, complete with leaderboard and challenge a friend. Utilizes <strong>React Redux</strong>, <strong>Django Rest Framework</strong>, <strong>PostgreSQL</strong> database, <strong>CSS3</strong>. Completed with a team I lead in a five day sprint. </p>
                        </div>
                    <br></br>
                    
                        <a className='githubButton text' href ='https://github.com/AmJann/restaurant-finder' target="_blank" rel="noreferrer">GitHub Repo</a>
                
                     </div>

                </div>
    <div>
        
    </div>

                <div className ='projectImgContainer'>

                    {/* Stock Watch */}
                    <div className ='project'>
                     <h3 id='poolTournamentFinder'className ='projectTitle text projectTitleB'>Stock Watch</h3>
                        <a href ='https://stock-watcher.onrender.com/' target="_blank" rel="noreferrer">
                            <img className ='projectImg' alt='screenshot of app' src ={stockWatch}/>
                        </a> 
                        <div className ='projectDescription'>
                        <p className ='text'>  Stock porfolio Calculator app. Utilizes <strong>React Redux</strong>, <strong>Django Rest Framework</strong>, <strong>PostgreSQL</strong> database, <strong>CSS3</strong>. Completed with a team I lead in a five day sprint.</p>
                        </div>
                        <a className='githubButton text' href='https://github.com/AmJann/Pool-tournament-searcher' target="_blank" rel="noreferrer">GitHub Repo</a>   
                    </div>

                    {/* Jelly Jam */}
                    <div className ='project'>
                        <h3 className ='projectTitle text projectTitleA'>Jelly Jam</h3>
                        <a href ='https://jellyjam.netlify.app/' target="_blank" rel="noreferrer">
                            <img className ='projectImg' alt='screenshot of app' src ={jellyJam}/>
                        </a>
                        <div className ='projectDescription'>
                        <p className ='text'>Spotify clone App. Utilizes <strong>ReactJS</strong>, <strong>Express</strong>, <strong>MongoDB</strong>, <strong>Axios</strong>, and <strong>CSS3</strong>. Team project completed in a two week sprint.</p>
                        </div>
                        <br></br>
                        <a  className='githubButton text' href ='https://github.com/AmJann/jellyjam-client-side' target="_blank" rel="noreferrer" >GitHub Repo</a>
                    </div>

                </div>
            </div>

    </div>
  )
}

export default Projects