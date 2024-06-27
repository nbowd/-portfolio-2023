import "./BioModal.css";
import React, { useState, useContext } from "react";
import GlobalContext from "../GlobalContext";
import { useDrag } from "@use-gesture/react";

import maximizeIcon from '../assets/maximize.png'
import Icon from "./Icon";

import myComputer from "../assets/mycomputer.png"
import me from "../assets/me.jpg"
import javascript from "../assets/javascript.png"
import react from "../assets/react.svg"
import jest from "../assets/jest.svg"
import node from "../assets/node.png"
import typescript from "../assets/typescript.png"

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
                            <button onClick={handleFullscreen}><img src={maximizeIcon} className="maximize"/></button>
                            <button  className="close-modal" onClick={handleClose}>
                                X
                            </button>
                        </div>
                        
                    </div>
                   <div className="bio-body">
                        <img src={me} alt="My Face, you're not missing out on anything" className="bio-picture" />
                        <h1>Nick Bowden</h1>
                        <h2>Software Engineer</h2>

                        <h2 className="bio-title about-me">
                        <b>
                            <u>About Me</u>
                        </b>
                        </h2>
                        <p>
                            I'm Nick, I'm a software engineer. I make full-stack web applications that are responsive and easy to use. I enjoy keeping up with the latest tech trends and use React to build the majority of my sites. When I'm not coding, I'm reading or playing video games.
                        </p>
                        <h2 className="bio-title">
                        <b>
                            <u>Skills</u>
                        </b>
                        </h2>
                        <div className="logos">

                            <Icon 
                                image={react}
                                alt="React logo"
                            />
                                <Icon 
                                    image={typescript}
                                    alt="TypeScript logo"
                                />
                            <Icon 
                                image={javascript}
                                alt="JavaScript logo"
                            />
                            <Icon 
                                image={node}
                                alt="Node logo"
                            />
                            <Icon 
                                image={jest}
                                alt="Jest logo"
                            />

                        </div>
                        <div className="techText">
                            <p>React/TypeScript/JavaScript/Node/Jest</p>
                        </div>
                   </div>   
            </div>
    );
}

export default BioModal;
