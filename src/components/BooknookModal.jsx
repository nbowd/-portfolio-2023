import React, { useState, useContext } from "react";
import { useDrag } from "@use-gesture/react";

import GlobalContext from "../GlobalContext";
import Icon from "./Icon";

import fileIcon from '../assets/file.png'
import maximizeIcon from '../assets/maximize.png'
import githubLogo from '../assets/icons8-github-50.png'
import webIcon from '../assets/icons8-globe-50.png'
import BooknookThumb from '../assets/BooknookThumb.png'

function BooknookModal() {
    const {booknookRef, pages, setPages, selected, setSelected } = useContext(GlobalContext);
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
      setSelected("Booknook")
    }

    const handleClose = () => {
        setPages(pages.filter(page => page !== 'Booknook'))
    }

    const handleMinimize = () => {
        booknookRef.current.style.display = 'none'
        setSelected("")
    }

    const handleFullscreen = () => {
      booknookRef.current.classList.toggle("fullscreen")
    }

    return (
        <div 
            onPointerDown={handleClick}
            style={{
                display: pages.includes("Booknook") ? "flex": "none",
                left: windowPosition.x,
                top: windowPosition.y
            }}
            ref={booknookRef}
            className={selected === "Booknook" ? "individual-project top" : "individual-project"}
            id='jam-session-modal'
        >
                <div className="modal-header" {...bindWindowPos()} >
                    <div className="header-left">
                        <img src={fileIcon} alt="" />
                        <h2>Booknook</h2>
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
                    <h1>Booknook</h1>
                    <img src={BooknookThumb} alt="" className="project-thumbnail"/>
                    <h2>About This Project</h2>

                    <p>Booknook is a web application to discover unique book recommendations based on the subject. This project was built as part of an Agile team to develop using micro-services. When a subject is selected, a call is made to the OpenLibraryAPI to retrieve randomized results. Users can get more information about each book which includes a description, a vendor link, and save options if logged in. Users can create an account and log in, to save books that they find for later.</p>
                    <div className="logos">
                        <a href="https://github.com/nbowd/booknook">
                            <Icon image={githubLogo} alt="GitHub Logo"/>
                        </a>
                        <a href="https://try-booknook.herokuapp.com/">
                            <Icon image={webIcon} alt="Globe web icon" />
                        </a>
                    </div>

                </div>
        </div>
    );
}

export default BooknookModal;