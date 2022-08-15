import React from 'react'
import jsLogo from '../images/jsLogo.png'
import reactLogo from '../images/reactLogo.png'
import cssLogo from '../images/cssLogo.png'
import pythonLogo from '../images/pythonLogo.png'
import sqlLogo from '../images/sqlLogo.png'
import djangoLogo from '../images/djangoLogo.png'
import mongoLogo from '../images/mongoLogo.png'
import htmlLogo from '../images/htmlLogo.png'
import ejsLogo from '../images/ejsLogo.png'

function Logos() {
  return (
    <div>
        <div id ='logoContainer'>
            <div className = 'logoRow'>
                <img className ='logo' alt ='JavaScript logo' src={jsLogo}/>
                <img className ='logo' alt ='React logo' src={reactLogo}/>
                <img className ='logo' alt ='CSS logo' src={cssLogo}/>
            </div>
            <div className = 'logoRow'>
                <img className ='logo' alt ='Python logo' src={pythonLogo}/>
                <img className ='logo' alt ='Django logo' src={djangoLogo}/>
                <img className ='logo' alt ='SQL logo' src={sqlLogo}/>
            </div>
            <div className = 'logoRow'>
                <img className ='logo' alt ='Mongo logo' src={mongoLogo}/>
                <img className ='logo' alt ='HTML logo' src={htmlLogo}/>
                <img className ='logo' alt ='EJS logo' src={ejsLogo}/>
            </div>
        </div>
    </div>
  )
}

export default Logos