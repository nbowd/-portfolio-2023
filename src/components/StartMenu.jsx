import './StartMenu.css'
import React from 'react';

function StartMenu(props) {
    return (
        <div className='start-menu'>
            <div className="menu-sidebar">
                <img src="src\assets\sidebarimg.png" alt="" />
            </div>
            <div className="start-menu-options">
                <div className="menu-option">
                    <img src="src\assets\folder-document.png" id='menu-resume' alt="" />
                    <div className='menu-option-text'><h2>Resume</h2></div>
                </div>
                <div className="menu-option">
                    <img src="src\assets\email.png" id='menu-email' alt="" />
                    <div className='menu-option-text'><h2>Email</h2></div>
                </div>
                <div className="menu-option">
                    <img src="src\assets\icons8-github-50.png" id='menu-github' alt="" />
                    <div className='menu-option-text'><h2>Github</h2></div>
                </div>
                <div className="menu-option">
                    <img src="src\assets\icons8-linkedin-48.png" id='menu-linkedin' alt="" />
                    <div className='menu-option-text'><h2>LinkedIn</h2></div>
                </div>
                <hr className='menu-divider'/>
                <div className="menu-option">
                    <img src="src\assets\shutdown.png" alt="" id='menu-shutdown' />
                    <div className='menu-option-text'><h2>Shut Down...</h2></div>
                </div>
            </div>
        </div>
    );
}

export default StartMenu;