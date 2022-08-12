import React from 'react'
import MineBoggler from '../images/MineBoggler.png'
import recipeReciter from '../images/recipeReciter.png'
import tournamentFinder from '../images/tournamentFinder.png'
import jellyJam from '../images/jellyJam.png'

function Projects() {
  return (
    <div>
        <h2 id='projectTitle'class ='text'>Projects</h2>
            <div id = 'projectsContainer'>

                <div class='projectImgContainer'>

                    {/* Mine Boggler */}
                    <div class ='project' >
                        <h3 class ='projectTitle text projectTitleA'>Mine Boggler</h3>
                            <a href = 'https://amjann.github.io/mine-boggler/'>
                                <img class='projectImg' src ={MineBoggler}/>
                            </a>
                            <div>
                            <p class ='text'>Boggle style based character movement game. Utilizes <strong>Vanilla Javascript</strong>, <strong>HTML</strong>, and <strong>CSS3</strong>.</p>
                            </div>
                            <br></br>
                            <a href ='https://github.com/AmJann/mine-boggler'>Github Repo</a>   
                            
                    </div>

                    {/* Recipe Reciter */}
                    <div class ='project'>   
                     <h3 class ='projectTitle text projectTitleB'>Recipe Reciter</h3>
                        <a href='https://recipe-reciter.herokuapp.com/'>
                            <img class='projectImg' src ={recipeReciter}/>
                        </a> 
                        <p class ='text'>A recipe app used for storing and organizing recipes. Utilizes <strong>Express</strong>, <strong>MongoDB</strong>, <strong>Mongoose</strong>, <strong>Node.js</strong>, <strong>EJS</strong>, and <strong>CSS3</strong>. </p>
                        <a href ='https://github.com/AmJann/recipe-reciter'>Github Repo</a>
                
                     </div>

                </div>
    <div>
        
    </div>

                <div class='projectImgContainer'>

                    {/* Tournament Finder */}
                    <div class ='project'>
                     <h3 class ='projectTitle text projectTitleB'>Pool Tournament Finder</h3>
                        <a href ='https://pool-tournament-finder.herokuapp.com/'>
                            <img class='projectImg' src ={tournamentFinder}/>
                        </a> 
                        <div>
                        <p class ='text'> Full stack pool tournament search app. Utilizes <strong>ReactJS</strong>, <strong>Python</strong>, <strong>Django</strong>, <strong>Django Rest Frameworks</strong>, <strong>JWT authentication</strong>, <strong>PostgreSQL</strong>, and <strong>CSS3</strong>.</p>
                        </div>
                        <a href='https://github.com/AmJann/Pool-tournament-searcher'>Github Repo</a>   
                    </div>

                    {/* Jelly Jam */}
                    <div class ='project'>
                        <h3 class ='projectTitle text projectTitleA'>Jelly Jam</h3>
                        <a href ='https://jellyjam.netlify.app/'>
                            <img class='projectImg' src ={jellyJam}/>
                        </a>
                        <p class ='text'>Spotify clone App. Utilizes <strong>ReactJS</strong>, <strong>Express</strong>, <strong>MongoDB</strong>, <strong>Axios</strong>, and <strong>CSS3</strong>.</p>
                        <br></br>
                        <a href ='https://github.com/AmJann/jellyjam-client-side'>Github Repo</a>
                    </div>

                </div>
            </div>

    </div>
  )
}

export default Projects