import React, { useState, useContext } from "react";
import GlobalContext from "../GlobalContext";
import { useDrag } from "@use-gesture/react";

import fileIcon from '../assets/file.png'
import napkin from '../assets/napkin.png'

function OldResume() {
    const {resumeRef, pages, setPages, selected, setSelected } = useContext(GlobalContext);
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
      setSelected("OldResume")
    }

    const handleClose = () => {
        setPages(pages.filter(page => page !== 'OldResume'))
    }

    const handleMinimize = () => {
        resumeRef.current.style.display = 'none'
        setSelected("")
    }

    const handleFullscreen = () => {
      resumeRef.current.classList.toggle("fullscreen")
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
                display: pages.includes("OldResume") ? "flex": "none",
                left: windowPosition.x,
                top: windowPosition.y
            }}
            ref={resumeRef}
            className={selected === "OldResume" ? "OldResume top" : "OldResume"}
            id='resume-modal'
        >
                <div className="modal-header" {...bindWindowPos()} >
                    <div className="header-left">
                        <img src={fileIcon} alt="" />
                        <h2>OldResume.jpg</h2>
                    </div>
                    <div className="header-right">
                        <button onClick={handleMinimize} onPointerDown={(e) => miniDown(e)}>_</button>
                        <button onClick={handleFullscreen}>O</button>
                        <button  className="close-modal" onClick={handleClose}>
                            X
                        </button>
                    </div>
                    
                </div>
                <div className="resume-body">
                    <img src={napkin} alt="" />
                </div>
        </div>
    );
}

export default OldResume;