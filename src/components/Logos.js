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
            <div class = 'logoRow'>
                <img class ='logo' alt ='JavaScript logo' src={jsLogo}/>
                <img class ='logo' alt ='React logo' src={reactLogo}/>
                <img class ='logo' alt ='CSS logo' src={cssLogo}/>
            </div>
            <div class = 'logoRow'>
                <img class ='logo' alt ='Python logo' src={pythonLogo}/>
                <img class ='logo' alt ='Django logo' src={djangoLogo}/>
                <img class ='logo' alt ='SQL logo' src={sqlLogo}/>
            </div>
            <div class = 'logoRow'>
                <img class ='logo' alt ='Mongo logo' src={mongoLogo}/>
                <img class ='logo' alt ='HTML logo' src={htmlLogo}/>
                <img class ='logo' alt ='EJS logo' src={ejsLogo}/>
            </div>
        </div>
    </div>
  )
}

export default Logos