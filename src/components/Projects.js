import React from 'react'
import MineBoggler from '../images/MineBoggler.png'
import recipeReciter from '../images/recipeReciter.png'
import tournamentFinder from '../images/tournamentFinder.png'
import jellyJam from '../images/jellyJam.png'

function Projects() {
  return (
    <div>
        <div id = 'projectsContainer'>
        <div class='projectImgContainer'>
            <img class='projectImg' src ={MineBoggler}/>
        </div>
        <div class='projectImgContainer'>
            <img class='projectImg' src ={recipeReciter}/>
        </div>
        <div class='projectImgContainer'>
            <img class='projectImg' src ={tournamentFinder}/>
        </div>
        <div class='projectImgContainer'>
            <img class='projectImg' src ={jellyJam}/>
        </div>
        </div>

    </div>
  )
}

export default Projects