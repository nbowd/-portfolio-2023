import React, { useState, useContext } from "react";
import { useDrag } from "@use-gesture/react";

import GlobalContext from "../GlobalContext";
import Icon from "./Icon";

import fileIcon from '../assets/file.png'
import githubLogo from '../assets/icons8-github-50.png'
import webIcon from '../assets/icons8-globe-50.png'
import TeamTimeOffThumb from '../assets/TeamTimeOffThumb.png'

function TeamTimeOffModal() {
    const {teamTimeOffRef, pages, setPages, selected, setSelected } = useContext(GlobalContext);
    const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
    const bindWindowPos = useDrag((params) => {
        setWindowPosition({
          x: params.offset[0],
          y: params.offset[1],
        });
      });
    const miniDown = (e) => {
    e.stopPropagation();
    };    

    const handleClick = () => {
      setSelected("TeamTimeOff")
    }

    const handleClose = () => {
        setPages(pages.filter(page => page !== 'TeamTimeOff'))
    }

    const handleMinimize = () => {
        teamTimeOffRef.current.style.display = 'none'
        setSelected("")
    }

    const handleFullscreen = () => {
      teamTimeOffRef.current.classList.toggle("fullscreen")
    }

    return (
        <div 
            onPointerDown={handleClick}
            style={{
                display: pages.includes("TeamTimeOff") ? "flex": "none",
                left: windowPosition.x,
                top: windowPosition.y
            }}
            ref={teamTimeOffRef}
            className={selected === "TeamTimeOff" ? "individual-project top" : "individual-project"}
            id='jam-session-modal'
        >
                <div className="modal-header" {...bindWindowPos()} >
                    <div className="header-left">
                        <img src={fileIcon} alt="" />
                        <h2>Team Time Off</h2>
                    </div>
                    <div className="header-right">
                        <button onClick={handleMinimize} onPointerDown={(e) => miniDown(e)}>_</button>
                        <button onClick={handleFullscreen}>O</button>
                        <button  className="close-modal" onClick={handleClose}>
                            X
                        </button>
                    </div>
                    
                </div>
                <div className="project-body">
                    <h1>Team Time Off</h1>
                    <img src={TeamTimeOffThumb} alt="" className="project-thumbnail"/>
                    <h2>About This Project</h2>

                    <p>The purpose of this project was to sharpen my full-stack skills through a simulated real-world project. I wanted to explore using some new tools, such as the suite of tools from Firebase, and to build an application that could solve an internal business problem. </p>

                    <p>The scenario for this application is that there is a small team that needs a better way to manage time off requests as the team currently handles it manually. They need a way to make and manage requests, which will be approved by managers, and will display approved request days so that everyone can plan.</p>
                    <div className="logos">
                        <a href="https://github.com/nbowd/team-time-off">
                            <Icon image={githubLogo} alt="GitHub Logo"/>
                        </a>
                        <a href="https://team-time-off.vercel.app/">
                            <Icon image={webIcon} alt="Globe web icon" />
                        </a>
                    </div>

                </div>
        </div>
    );
}

export default TeamTimeOffModal;