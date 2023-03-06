import "./BioModal.css";
import React, { useState, useContext } from "react";
import GlobalContext from "../GlobalContext";
import { useDrag } from "@use-gesture/react";
import myComputer from "../assets/mycomputer.png"

function BioModal() {
    const {bioRef, pages, setPages, selected, setSelected } = useContext(GlobalContext);
    const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
    const bindWindowPos = useDrag((params) => {
        setWindowPosition({
          x: params.offset[0],
          y: params.offset[1],
        });
      });
    
    const handleClick = () => {
      setSelected("Bio")
    }

    const handleClose = () => {
        setPages(pages.filter(page => page !== 'Bio'))
    }

    const handleMinimize = () => {
        bioRef.current.style.display = 'none'
        setSelected("")
    }

    const handleFullscreen = () => {
      bioRef.current.classList.toggle("fullscreen")
    }

    const miniDown = (e) => {
        e.stopPropagation();
      };

    return (
            <div 
                onPointerDown={handleClick}
                style={{
                    display: pages.includes("Bio") ? "flex": "none",
                    left: windowPosition.x,
                    top: windowPosition.y
                }}
                ref={bioRef}
                className={selected === "Bio" ? "Bio top" : "Bio"}
                id='bio-modal'
            >
                    <div className="modal-header" {...bindWindowPos()} >
                        <div className="header-left">
                            <img src={myComputer} alt="" />
                            <h2>My Bio</h2>
                        </div>
                        <div className="header-right">
                            <button onClick={handleMinimize}>_</button>
                            <button onClick={handleFullscreen}>O</button>
                            <button  className="close-modal" onClick={handleClose}>
                                X
                            </button>
                        </div>
                        
                    </div>
                   <div className="bio-body">
                        <h1>Nick Bowden</h1>
                        <h2>Software Engineer</h2>

                        <h2 className="bio-title">
                        <b>
                            <u>About Me</u>
                        </b>
                        </h2>
                        <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio et totam laborum reiciendis iste voluptas enim, assumenda dignissimos! Quam debitis placeat reiciendis aperiam atque ipsa sint officiis provident inventore nesciunt obcaecati, minima fugit odit labore nisi facilis asperiores! Quidem, reiciendis?
                        </p>
                        <h2 className="bio-title">
                        <b>
                            <u>Skills</u>
                        </b>
                        </h2>
                        <div className="logos">

                        </div>
                        <div className="techText">
                            <p>React/Javascript/Jest/HTML/CSS</p>
                        </div>
                   </div>   
            </div>
    );
}

export default BioModal;
