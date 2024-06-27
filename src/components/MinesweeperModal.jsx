import React, { useState, useContext } from "react";
import { useDrag } from "@use-gesture/react";

import GlobalContext from "../GlobalContext";
import Minesweeper from "../minesweeper/Minesweeper";

import fileIcon from '../assets/file.png'
import maximizeIcon from '../assets/maximize.png'
import minesweeperIcon from '../assets/minesweeper.png'

function MinesweeperModal() {
    const {minesweeperRef, pages, setPages, selected, setSelected } = useContext(GlobalContext);
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
      setSelected("Minesweeper")
    }

    const handleClose = () => {
        setPages(pages.filter(page => page !== 'Minesweeper'))
    }

    const handleMinimize = () => {
        minesweeperRef.current.style.display = 'none'
        setSelected("")
    }

    const handleFullscreen = () => {
      minesweeperRef.current.classList.toggle("fullscreen")
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
                display: pages.includes("Minesweeper") ? "flex": "none",
                left: windowPosition.x,
                top: windowPosition.y
            }}
            ref={minesweeperRef}
            className={selected === "Minesweeper" ? "Minesweeper top" : "Minesweeper"}
            id='resume-modal'
        >
                <div className="modal-header" {...bindWindowPos()} >
                    <div className="header-left">
                        <img src={minesweeperIcon} alt="" />
                        <h2>Minesweeper</h2>
                    </div>
                    <div className="header-right">
                        <button onClick={handleMinimize} onPointerDown={(e) => miniDown(e)}>_</button>
                        <button disabled><img src={maximizeIcon} className="maximize"/></button>
                        <button  className="close-modal" onClick={handleClose}>
                            X
                        </button>
                    </div>
                    
                </div>
                {/* <div className="resume-body">
                    <img src={napkin} alt="" />
                </div> */}
                <Minesweeper />
        </div>
    );
}

export default MinesweeperModal;