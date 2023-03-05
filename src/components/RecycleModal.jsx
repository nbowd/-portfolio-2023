import React, { useState, useContext } from "react";
import useDragger from "../hooks/useDragger";
import GlobalContext from "../GlobalContext";
import { useDrag } from "@use-gesture/react";


function RecycleModal({display}) {
    const {recycleRef, pages, setPages, selected, setSelected } = useContext(GlobalContext);
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

    // useDragger('recycle-modal')
    
    const handleBodyClick = (e) => {
      e.preventDefault();
    }
    
    const handleClick = () => {
      setSelected("Recycle Bin")
    }

    const handleClose = () => {
        setPages(pages.filter(page => page !== 'Recycle Bin'))
    }

    const handleMinimize = () => {
        recycleRef.current.style.display = 'none'
        setSelected("")
    }

    const handleFullscreen = () => {
      recycleRef.current.classList.toggle("fullscreen")
    }
    return (
        <>
            <div 
                onPointerDown={handleClick}
                style={{
                    display: display,
                    left: windowPosition.x,
                    top: windowPosition.y
                }}
                ref={recycleRef}
                className={selected === "Recycle Bin" ? "RecycleBin top" : "RecycleBin"}
                id='recycle-modal'
            >
                    <div className="modal-header" {...bindWindowPos()}  >
                        <div className="header-left">
                            <img src="src\assets\recycle.png" alt="" />
                            <h2>Recycle Bin</h2>
                        </div>
                        <div className="header-right">
                            <button onClick={handleMinimize} onPointerDown={(e) => miniDown(e)}>_</button>
                            <button onClick={handleFullscreen}>O</button>
                            <button  className="close-modal" onClick={handleClose}>
                                X
                            </button>
                        </div>
                        
                    </div>
                   <div className="recycle-body" onPointerDown={handleBodyClick}>
                        <p>Recycle Modal Recycle Modal Recycle Modal Recycle Modal Recycle Modal Recycle Modal Recycle Modal Recycle Modal Recycle Modal Recycle Modal Recycle Modal Recycle Modal Recycle Modal Recycle Modal Recycle Modal Recycle Modal Recycle Modal Recycle Modal Recycle Modal Recycle Modal Recycle Modal Recycle Modal Recycle Modal Recycle Modal </p>
                   </div>   
            </div>
            
        </>
    );
}

export default RecycleModal;
