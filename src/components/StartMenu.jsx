import './StartMenu.css'
import React from 'react';

import folderDocument from '../assets/folder-document.png';
import emailIcon from '../assets/email.png';
import githubLogo from '../assets/icons8-github-50.png';
import linkedinLogo from '../assets/icons8-linkedin-48.png';
import shutdownIcon from '../assets/shutdown.png';

import resume from '../assets/resume.pdf'


function StartMenu(props) {
    return (
        <div className='start-menu'>
            <div className="menu-sidebar">
                <img src="src\assets\sidebarimg.png" alt="" />
            </div>
            <div className="start-menu-options">
                <div className="menu-option">
                    <a         
                        href={resume}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={folderDocument} id='menu-resume' alt="" />
                        <div className='menu-option-text'><h2>Resume</h2></div>
                    </a>
                </div>
                <div className="menu-option">
                    <a href="mailto:nickbwdn@gmail.com">
                        <img src={emailIcon} id='menu-email' alt="" />
                        <div className='menu-option-text'><h2>Email</h2></div>
                    </a>
                </div>
                <div className="menu-option">
                    <a href="https://github.com/nbowd">
                        <img src={githubLogo} id='menu-github' alt="" />
                        <div className='menu-option-text'><h2>Github</h2></div>
                    </a>
                </div>
                <div className="menu-option">
                    <a href="https://linkedin.com/in/nicholas-bowden">
                        <img src={linkedinLogo} id='menu-linkedin' alt="" />
                        <div className='menu-option-text'><h2>LinkedIn</h2></div>
                    </a>
                </div>
                <hr className='menu-divider'/>
                <div className="menu-option">
                    <a href="#">
                        <img src={shutdownIcon} alt="" id='menu-shutdown' />
                        <div className='menu-option-text'><h2>Shut Down...</h2></div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default StartMenu;