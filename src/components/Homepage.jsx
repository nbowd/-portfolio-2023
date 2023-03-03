import './Homepage.css'
import React, {useState, useRef} from 'react';
import StartBar from './StartBar';
import StartMenu from './StartMenu';
import useDragger from '../hooks/useDragger';
import BioModal from './BioModal';

function Homepage() {
    const [openMenu, setOpenMenu] = useState(false);
    const [bioModal, setBioModal] = useState(false);
    const [bioTabVisible, setBioTabVisible] = useState(false);
    // useDragger("pink-box")

    const bioTabRef = useRef(null);

    const handleBioOpen = (e) => {
        if (bioTabVisible) {
            bioTabRef.current.classList.add('clicked')
        }
        setBioModal(true)
        setBioTabVisible(true)
    }

    const handleBioToggle = (e) => {
        bioTabRef.current.classList.toggle('clicked')
        setBioModal(!bioModal)
    }

    const handleBioClose = (e) => {
        bioTabRef.current.classList.remove('clicked')
        setBioModal(false)
        setBioTabVisible(false)
    }
    return (
        <div className='homepage'>
            <div className="homepage-items">
                <div className="homepage-item" onClick={handleBioOpen}>
                    <div className="item-icon">
                        <img src="src\assets\mycomputer.png" alt="" />
                    </div>
                    <div className="item-title">
                        My Bio
                    </div>
                </div>
                <div className="homepage-item">
                    <div className="item-icon">
                        <img src="src\assets\recycle.png" alt="" />
                    </div>
                    <div className="item-title">
                        Recycle Bin
                    </div>
                </div>
                <div className="homepage-item">
                    <div className="item-icon">
                        <img src="src\assets\folder.png" alt="" />
                    </div>
                    <div className="item-title">
                        Projects
                    </div>
                </div>
                <div className="homepage-item">
                    <div className="item-icon">
                        <img src="src\assets\minesweeper.png" id='minesweeper-icon' alt="" />
                    </div>
                    <div className="item-title">
                        Minesweeper
                    </div>
                </div>
            </div>

            
                {/* <div className="box" id="pink-box"></div> */}
            <BioModal props={{bioModal, setBioModal, handleBioClose, handleBioToggle}} />
            {openMenu
                ?
                <StartMenu/>
                :
                null
            }
            <StartBar props={{openMenu, setOpenMenu, handleBioOpen, handleBioToggle, handleBioClose, bioTabVisible, bioTabRef}}/>
        </div>
    );
}

export default Homepage;