import React, { useState, useContext } from "react";
import { useDrag } from "@use-gesture/react";

import GlobalContext from "../GlobalContext";
import Icon from "./Icon";

import fileIcon from '../assets/file.png'
import githubLogo from '../assets/icons8-github-50.png'
import maximizeIcon from '../assets/maximize.png'
import cloudAPIThumb from '../assets/cloudAPIThumb.jpg'

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
                        <button onClick={handleFullscreen}><img src={maximizeIcon} className="maximize"/></button>
                        <button  className="close-modal" onClick={handleClose}>
                            X
                        </button>
                    </div>
                    
                </div>
                <div className="project-body">
                    <h1>Marina API</h1>
                    <img src={cloudAPIThumb} alt="" className="project-thumbnail"/>
                    <h2>About This Project</h2>

                    <p>This is a cloud-based API to service a marina. Users can register new boats after they authorize their accounts through Google. Users can also create representations of loads those boats will carry. Each load can only go on one boat, but a boat will be able to carry multiple loads. The API supports full CRUD operations for both the boat and load entities, as well as endpoints to update the relationships between a load and a boat.</p>
                    
                    <div className="logos">
                        <a href="https://github.com/nbowd/marina_api">
                            <Icon image={githubLogo} alt="GitHub Logo"/>
                        </a>
                    </div>

                </div>
        </div>
    );
}

export default MarinaAPIModal;