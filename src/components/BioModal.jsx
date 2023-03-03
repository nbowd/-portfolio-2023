import "./BioModal.css";
import React, { useState } from "react";
import useDragger from "../hooks/useDragger";

function BioModal({props}) {

    const {bioProps, handleModalClose, handleModalToggle} = props;
    const {bioTabRef, bioModal, setBioModal, bioTabVisible, setBioTabVisible} = bioProps

    if(bioModal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')

    }

    if (bioModal) {
        useDragger('bio-modal')
    }
 
    const handleBodyClick = (e) => {
      e.preventDefault();
    }
    
    return (
        <>
            {bioModal && <div className="modal" >
                <div className="modal-content" id='bio-modal' >
                    <div className="modal-header"  >
                        <div className="header-left">
                            <img src="src\assets\mycomputer.png" alt="" />
                            <h2>My Bio</h2>
                        </div>
                        <div className="header-right">
                            <button onClick={() => handleModalToggle(bioTabRef, bioModal, setBioModal)}>_</button>
                            <button>O</button>
                            <button onClick={() => handleModalClose(bioTabRef, setBioModal, setBioTabVisible)} className="close-modal">
                                X
                            </button>
                        </div>
                        
                    </div>
                   <div className="modal-body" onPointerDown={handleBodyClick}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia architecto, laborum nobis cum officiis, nostrum minus quos illum odit magnam consequatur numquam natus rerum deleniti, cupiditate dignissimos consequuntur similique fugiat cumque voluptatum repellendus rem? Natus, molestias ex? Temporibus asperiores perspiciatis numquam dolorem ea. Tempore sunt cupiditate magni reprehenderit culpa hic!</p>
                   </div>
                    
                </div>
            </div>}
            
        </>
    );
}

export default BioModal;
