import "./BioModal.css";
import React, { useState, useContext } from "react";
import useDragger from "../hooks/useDragger";
import GlobalContext from "../GlobalContext";

function BioModal() {
    const {bioRef, pages, setPages, selected, setSelected } = useContext(GlobalContext);
    useDragger('bio-modal')
    
    const handleBodyClick = (e) => {
      e.preventDefault();
    }
    
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
    return (
        <>
            <div 
                onPointerDown={handleClick}
                style={{
                    display: pages.includes("Bio") ? "flex": "none"
                }}
                ref={bioRef}
                className={selected === "Bio" ? "modal-content top" : "modal-content"}
                id='bio-modal'
            >
                    <div className="modal-header"  >
                        <div className="header-left">
                            <img src="src\assets\mycomputer.png" alt="" />
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
                   <div className="modal-body" onPointerDown={handleBodyClick}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia architecto, laborum nobis cum officiis, nostrum minus quos illum odit magnam consequatur numquam natus rerum deleniti, cupiditate dignissimos consequuntur similique fugiat cumque voluptatum repellendus rem? Natus, molestias ex? Temporibus asperiores perspiciatis numquam dolorem ea. Tempore sunt cupiditate magni reprehenderit culpa hic!</p>
                   </div>   
            </div>
            
        </>
    );
}

export default BioModal;
