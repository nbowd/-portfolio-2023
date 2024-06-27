import React, { useState, useContext } from "react";
import { useDrag } from "@use-gesture/react";

import GlobalContext from "../GlobalContext";
import Icon from "./Icon";

import fileIcon from '../assets/file.png'
import webIcon from '../assets/icons8-globe-50.png'
import maximizeIcon from '../assets/maximize.png'
import PokedexGameThumb from '../assets/PokedexGameThumb.png'

function PokedexGameModal() {
    const {pokedexGameRef, pages, setPages, selected, setSelected } = useContext(GlobalContext);
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
      setSelected("PokedexGame")
    }

    const handleClose = () => {
        setPages(pages.filter(page => page !== 'PokedexGame'))
    }

    const handleMinimize = () => {
        pokedexGameRef.current.style.display = 'none'
        setSelected("")
    }

    const handleFullscreen = () => {
      pokedexGameRef.current.classList.toggle("fullscreen")
    }

    return (
        <div 
            onPointerDown={handleClick}
            style={{
                display: pages.includes("PokedexGame") ? "flex": "none",
                left: windowPosition.x,
                top: windowPosition.y
            }}
            ref={pokedexGameRef}
            className={selected === "PokedexGame" ? "individual-project top" : "individual-project"}
            id='jam-session-modal'
        >
                <div className="modal-header" {...bindWindowPos()} >
                    <div className="header-left">
                        <img src={fileIcon} alt="" />
                        <h2>Pokedex Game</h2>
                    </div>
                    <div className="header-right">
                        <button onClick={handleMinimize} onPointerDown={(e) => miniDown(e)}>_</button>
                        <button onClick={handleFullscreen} ><img src={maximizeIcon} className="maximize"/></button>
                        <button  className="close-modal" onClick={handleClose}>
                            X
                        </button>
                    </div>
                    
                </div>
                <div className="project-body">
                    <h1>Pokedex Game</h1>
                    <img src={PokedexGameThumb} alt="" className="project-thumbnail"/>
                    <h2>About This Project</h2>

                    <p>This was a fun side project that I started out as a self challenge to recreate a Pokedex using HTML, CSS, and SVG. After I finished it, I wanted to add an interactive element to it. It was perfect for making a small Pokemon identification game using JavaScript.</p>
                    <p>A random Pokemon is chosen from the user selected generations using a free Pokemon api, the image is distorted using heavy pixelation from the react-pixelate library. The player gets 5 chances to guess the correct Pokemon with each incorrect guess slowly reducing the distortion until the clear image is revealed. It is quick, fun, and accessible to all Pokeman fans because you can lock the game to only include known or favorite generations.</p>
                    
                    <div className="logos">
                        <a href="https://whodatpokemon.netlify.app/">
                            <Icon image={webIcon} alt="Globe web icon" />
                        </a>
                    </div>
                </div>
        </div>
    );
}

export default PokedexGameModal;