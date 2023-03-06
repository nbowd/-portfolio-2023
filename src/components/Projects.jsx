import React, { useState, useContext } from "react";
import GlobalContext from "../GlobalContext";
import { useDrag } from "@use-gesture/react";
import Icon from "./Icon";

import folderIcon from '../assets/folder.png'
import fileIcon from '../assets/file.png'


function Projects() {
    const {projectsRef, pages, setPages, selected, setSelected } = useContext(GlobalContext);
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
      setSelected("Projects")
    }

    const handleClose = () => {
        setPages(pages.filter(page => page !== 'Projects'))
    }

    const handleMinimize = () => {
        projectsRef.current.style.display = 'none'
        setSelected("")
    }

    const handleFullscreen = () => {
      projectsRef.current.classList.toggle("fullscreen")
    }

    const handleIconClick = (e, name) => {
        e.stopPropagation();
        if (!pages.includes(name)) {
          setPages([...pages, name]);
          setSelected(name);
        } else {
          setSelected(name);
        }
      };

    return (
        <div 
            onPointerDown={handleClick}
            style={{
                display: pages.includes("Projects") ? "flex": "none",
                left: windowPosition.x,
                top: windowPosition.y
            }}
            ref={projectsRef}
            className={selected === "Projects" ? "Projects top" : "Projects"}
            id='resume-modal'
        >
                <div className="modal-header" {...bindWindowPos()} >
                    <div className="header-left">
                        <img src={folderIcon} alt="" />
                        <h2>Projects</h2>
                    </div>
                    <div className="header-right">
                        <button onClick={handleMinimize} onPointerDown={(e) => miniDown(e)}>_</button>
                        <button onClick={handleFullscreen}>O</button>
                        <button  className="close-modal" onClick={handleClose}>
                            X
                        </button>
                    </div>
                    
                </div>
                <div className="window-body">
                    <Icon 
                        name="JamSession"
                        handleClick={(e) => handleIconClick(e, "JamSession")}
                        image={fileIcon}
                        alt="JamSession Project Icon"
                    />
                </div>
        </div>
    );
}

export default Projects;