import React, { useState, useContext } from "react";
import GlobalContext from "../GlobalContext";
import { useDrag } from "@use-gesture/react";

import fileIcon from '../assets/file.png'
import napkin from '../assets/napkin.png'

function MarinaAPIModal() {
    const {marinaAPIRef, pages, setPages, selected, setSelected } = useContext(GlobalContext);
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
      setSelected("Marina API")
    }

    const handleClose = () => {
        setPages(pages.filter(page => page !== 'Marina API'))
    }

    const handleMinimize = () => {
        marinaAPIRef.current.style.display = 'none'
        setSelected("")
    }

    const handleFullscreen = () => {
      marinaAPIRef.current.classList.toggle("fullscreen")
    }

    return (
        <div 
            onPointerDown={handleClick}
            style={{
                display: pages.includes("Marina API") ? "flex": "none",
                left: windowPosition.x,
                top: windowPosition.y
            }}
            ref={marinaAPIRef}
            className={selected === "Marina API" ? "individual-project top" : "individual-project"}
            id='marina-api-modal'
        >
                <div className="modal-header" {...bindWindowPos()} >
                    <div className="header-left">
                        <img src={fileIcon} alt="" />
                        <h2>Marina API</h2>
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
                    <h1>Marina API</h1>
                    <img src={napkin} alt="" className="project-thumbnail"/>
                    <h2>About This Project</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum atque quia veniam harum quos iure, quod, quaerat ea architecto aspernatur id deleniti. Accusamus aspernatur corrupti aliquid quod obcaecati quia veniam ipsam exercitationem quam omnis iste, quas maxime earum numquam.</p>
                    
                    <div className="icons">

                    </div>

                </div>
        </div>
    );
}

export default MarinaAPIModal;