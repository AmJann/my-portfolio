import React from 'react'
import MineBoggler from '../images/MineBoggler.png'
import recipeReciter from '../images/recipeReciter.png'
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
                            <a href = 'https://amjann.github.io/mine-boggler/'>
                                <img className ='projectImg' src ={MineBoggler}/>
                            </a>
                            <div className ='projectDescription'>
                            <p className ='text'>Boggle style based character movement game. Utilizes <strong>Vanilla Javascript</strong>, <strong>HTML</strong>, and <strong>CSS3</strong>.</p>
                            </div>
                            <br></br>
                            <a className='githubButton text' href ='https://github.com/AmJann/mine-boggler'>Github Repo</a>   
                            
                    </div>

                    {/* Recipe Reciter */}
                    <div className ='project'>   
                     <h3 className ='projectTitle text projectTitleB'>Recipe Reciter</h3>
                        <a href='https://recipe-reciter.herokuapp.com/'>
                            <img class='projectImg' src ={recipeReciter}/>
                        </a> 
                        <div className ='projectDescription'>
                        <p className ='text'>A recipe app used for storing and organizing recipes. Utilizes <strong>Express</strong>, <strong>MongoDB</strong>, <strong>Mongoose</strong>, <strong>Node.js</strong>, <strong>EJS</strong>, and <strong>CSS3</strong>. </p>
                        </div>
                    <br></br>
                        <a className='githubButton text' href ='https://github.com/AmJann/recipe-reciter'>Github Repo</a>
                
                     </div>

                </div>
    <div>
        
    </div>

                <div className ='projectImgContainer'>

                    {/* Tournament Finder */}
                    <div className ='project'>
                     <h3 id='poolTournamentFinder'className ='projectTitle text projectTitleB'>Pool Tournament Finder</h3>
                        <a href ='https://pool-tournament-finder.herokuapp.com/'>
                            <img className ='projectImg' src ={tournamentFinder}/>
                        </a> 
                        <div className ='projectDescription'>
                        <p className ='text'> Full stack pool tournament search app. Utilizes <strong>ReactJS</strong>, <strong>Python</strong>, <strong>Django</strong>, <strong>Django Rest Frameworks</strong>, <strong>JWT authentication</strong>, <strong>PostgreSQL</strong>, and <strong>CSS3</strong>.</p>
                        </div>
                        <a className='githubButton text' href='https://github.com/AmJann/Pool-tournament-searcher'>Github Repo</a>   
                    </div>

                    {/* Jelly Jam */}
                    <div className ='project'>
                        <h3 className ='projectTitle text projectTitleA'>Jelly Jam</h3>
                        <a href ='https://jellyjam.netlify.app/'>
                            <img className ='projectImg' src ={jellyJam}/>
                        </a>
                        <div className ='projectDescription'>
                        <p className ='text'>Spotify clone App. Utilizes <strong>ReactJS</strong>, <strong>Express</strong>, <strong>MongoDB</strong>, <strong>Axios</strong>, and <strong>CSS3</strong>. Team project completed in a two week sprint.</p>
                        </div>
                        <br></br>
                        <a  className='githubButton text' href ='https://github.com/AmJann/jellyjam-client-side'>Github Repo</a>
                    </div>

                </div>
            </div>

    </div>
  )
}

export default Projects