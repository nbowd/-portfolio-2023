import React, { useState, useContext } from "react";
import { useDrag } from "@use-gesture/react";

import GlobalContext from "../GlobalContext";
import Icon from "./Icon";

import fileIcon from '../assets/file.png'
import maximizeIcon from '../assets/maximize.png'
import githubLogo from '../assets/icons8-github-50.png'
import CrowdFlowThumb from '../assets/CrowdFlowThumb.png'

function CrowdFlowModal() {
    const {crowdFlowRef, pages, setPages, selected, setSelected } = useContext(GlobalContext);
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
      setSelected("CrowdFlow")
    }

    const handleClose = () => {
        setPages(pages.filter(page => page !== 'CrowdFlow'))
    }

    const handleMinimize = () => {
        crowdFlowRef.current.style.display = 'none'
        setSelected("")
    }

    const handleFullscreen = () => {
      crowdFlowRef.current.classList.toggle("fullscreen")
    }

    return (
        <div 
            onPointerDown={handleClick}
            style={{
                display: pages.includes("CrowdFlow") ? "flex": "none",
                left: windowPosition.x,
                top: windowPosition.y
            }}
            ref={crowdFlowRef}
            className={selected === "CrowdFlow" ? "individual-project top" : "individual-project"}
            id='jam-session-modal'
        >
                <div className="modal-header" {...bindWindowPos()} >
                    <div className="header-left">
                        <img src={fileIcon} alt="" />
                        <h2>CrowdFlow</h2>
                    </div>
                    <div className="header-right">
                        <button onClick={handleMinimize} onPointerDown={(e) => miniDown(e)}>_</button>
                        <button onClick={handleFullscreen}><img src={maximizeIcon} className="maximize"/></button>
                        <button  className="close-modal" onClick={handleClose}>
                            X
                        </button>
                    </div>
                    
                </div>
                <div className="project-body">
                    <h1>CrowdFlow</h1>
                    <img src={CrowdFlowThumb} alt="" className="project-thumbnail"/>
                    <h2>About This Project</h2>

                    <p>This is an admin interface for a ticketing system. This was designed with a partner for my Introduction to Databases class at OSU. We worked together to craft a proposal for a mock product that would service a mid-size venue (~1500 seats) to manage all their data needs. This was accomplished by implementing a relational database after extensive group discussion and numerous peer reviews. This is an SQL MariaDB with multiple entities featuring various kinds of relationships.</p>
                    
                    <div className="logos">
                        <a href="https://github.com/nbowd/CrowdFlow">
                            <Icon image={githubLogo} alt="GitHub logo" />
                        </a>
                    </div>

                </div>
        </div>
    );
}

export default CrowdFlowModal;