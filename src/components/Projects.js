import React from 'react'
import MineBoggler from '../images/MineBoggler.png'
import restaurantFinder from '../images/restaurantFinder.png'
import tournamentFinder from '../images/tournamentFinder.png'
import jellyJam from '../images/jellyJam.png'

function Projects() {
  return (
    <div>
        <h2 id='projectTitle'className ='text'>Projects</h2>
            <div id = 'projectsContainer'>

                <div className ='projectImgContainer'>

                    {/* Mine Boggler */}
                    <div className ='project' >
                        <h3 className ='projectTitle text projectTitleA'>Mine Boggler</h3>
                            <a href = 'https://amjann.github.io/mine-boggler/' target="_blank" rel="noreferrer">
                                <img className ='projectImg' alt ='screenshot of game'src ={MineBoggler}/>
                            </a>
                            <div className ='projectDescription'>
                            <p className ='text'>Boggle style based character movement game. Utilizes <strong>Vanilla Javascript</strong>, <strong>HTML</strong>, and <strong>CSS3</strong>.</p>
                            </div>
                            <br></br>
                            <a className='githubButton text' href ='https://github.com/AmJann/mine-boggler' target="_blank" rel="noreferrer">GitHub Repo</a>   
                            
                    </div>

                    {/* Recipe Reciter */}
                    <div className ='project'>   
                     <h3 className ='projectTitle text projectTitleB'>Restaraunt Finder</h3>
                        <a href='https://challenge4-yelp.onrender.com/' target="_blank" rel="noreferrer">
                            <img class='projectImg' alt='screenshot of app' src ={restaurantFinder}/>
                        </a> 
                        <div className ='projectDescription'>
                        <p className ='text'>Restaurant search app and restaurant suggestion generator. Utilizes <strong>React Redux</strong>, <strong>Django Rest Framework</strong>, <strong>PostgreSQL</strong> database, <strong>CSS3</strong> and geolocation. </p>
                        </div>
                    <br></br>
                    
                        <a className='githubButton text' href ='https://github.com/AmJann/restaurant-finder' target="_blank" rel="noreferrer">GitHub Repo</a>
                
                     </div>

                </div>
    <div>
        
    </div>

                <div className ='projectImgContainer'>

                    {/* Tournament Finder */}
                    <div className ='project'>
                     <h3 id='poolTournamentFinder'className ='projectTitle text projectTitleB'>Pool Tournament Finder</h3>
                        <a href ='https://pool-tournament-finder.onrender.com/' target="_blank" rel="noreferrer">
                            <img className ='projectImg' alt='screenshot of app' src ={tournamentFinder}/>
                        </a> 
                        <div className ='projectDescription'>
                        <p className ='text'> Full stack pool tournament search app. Utilizes <strong>ReactJS</strong>, <strong>Python</strong>, <strong>Django</strong>, <strong>Django Rest Frameworks</strong>, <strong>JWT authentication</strong>, <strong>PostgreSQL</strong>, and <strong>CSS3</strong>.</p>
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