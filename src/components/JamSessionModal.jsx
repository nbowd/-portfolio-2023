import React, { useState, useContext } from "react";
import GlobalContext from "../GlobalContext";
import { useDrag } from "@use-gesture/react";

import fileIcon from '../assets/file.png'
import napkin from '../assets/napkin.png'

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
                    <img src={napkin} alt="" className="project-thumbnail"/>
                    <h2>About This Project</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum atque quia veniam harum quos iure, quod, quaerat ea architecto aspernatur id deleniti. Accusamus aspernatur corrupti aliquid quod obcaecati quia veniam ipsam exercitationem quam omnis iste, quas maxime earum numquam.</p>
                    
                    <div className="icons">

                    </div>

                </div>
        </div>
    );
}

export default JamSessionModal;