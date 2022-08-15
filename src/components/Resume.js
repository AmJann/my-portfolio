import React from 'react'
import resume from '../images/Amber-Jankowski-Resume.pdf'
import resumeIcon from '../images/resume-icon.png'

function Resume() {
  return (
    <div>
       <a href = {resume} target='_blank'><img src={resumeIcon}/></a>
    </div>
  )
}

export default Resume