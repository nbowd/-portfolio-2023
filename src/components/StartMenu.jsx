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
                    <a href="">
                        <img src="src\assets\folder-document.png" id='menu-resume' alt="" />
                        <div className='menu-option-text'><h2>Resume</h2></div>
                    </a>
                </div>
                <div className="menu-option">
                    <a href="mailto:nickbwdn@gmail.com">
                        <img src="src\assets\email.png" id='menu-email' alt="" />
                        <div className='menu-option-text'><h2>Email</h2></div>
                    </a>
                </div>
                <div className="menu-option">
                    <a href="https://github.com/nbowd">
                        <img src="src\assets\icons8-github-50.png" id='menu-github' alt="" />
                        <div className='menu-option-text'><h2>Github</h2></div>
                    </a>
                </div>
                <div className="menu-option">
                    <a href="https://linkedin.com/in/nicholas-bowden">
                        <img src="src\assets\icons8-linkedin-48.png" id='menu-linkedin' alt="" />
                        <div className='menu-option-text'><h2>LinkedIn</h2></div>
                    </a>
                </div>
                <hr className='menu-divider'/>
                <div className="menu-option">
                    <a href="https://www.youtube.com/watch?v=cepZIk0PlvM">
                        <img src="src\assets\shutdown.png" alt="" id='menu-shutdown' />
                        <div className='menu-option-text'><h2>Shut Down...</h2></div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default StartMenu;