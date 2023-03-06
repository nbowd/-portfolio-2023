import React, { useState, useContext } from "react";
import { useDrag } from "@use-gesture/react";

import GlobalContext from "../GlobalContext";
import Icon from "./Icon";

import fileIcon from '../assets/file.png'
import githubLogo from '../assets/icons8-github-50.png'
import youtubeLogo from '../assets/icons8-youtube-48.png'
import JamSessionThumb from '../assets/JamSessionThumb.png'

function JamSessionModal() {
    const {jamSessionRef, pages, setPages, selected, setSelected } = useContext(GlobalContext);
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
      setSelected("Jam Session")
    }

    const handleClose = () => {
        setPages(pages.filter(page => page !== 'Jam Session'))
    }

    const handleMinimize = () => {
        jamSessionRef.current.style.display = 'none'
        setSelected("")
    }

    const handleFullscreen = () => {
      jamSessionRef.current.classList.toggle("fullscreen")
    }

    return (
        <div 
            onPointerDown={handleClick}
            style={{
                display: pages.includes("Jam Session") ? "flex": "none",
                left: windowPosition.x,
                top: windowPosition.y
            }}
            ref={jamSessionRef}
            className={selected === "Jam Session" ? "individual-project top" : "individual-project"}
            id='jam-session-modal'
        >
                <div className="modal-header" {...bindWindowPos()} >
                    <div className="header-left">
                        <img src={fileIcon} alt="" />
                        <h2>Jam Session</h2>
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
                    <h1>Jam Session</h1>
                    <img src={JamSessionThumb} alt="" className="project-thumbnail"/>
                    <h2>About This Project</h2>

                    <p>Jam Session is a web application for finding musicians and Artists via social media-like functionality. The goal is to create an app that makes finding musicians, groups, and gigs convenient while providing some interactivity and community. Built with React using Typescript, Python, and Django.</p>
                    
                    <div className="logos">
                        <a href="https://github.com/iDoc1/Jam-Session">
                            <Icon image={githubLogo}/>
                        </a>
                        <a href="https://www.youtube.com/watch?v=eTqZM5ntU-M">
                            <Icon image={youtubeLogo}/>
                        </a>
                    </div>

                </div>
        </div>
    );
}

export default JamSessionModal;