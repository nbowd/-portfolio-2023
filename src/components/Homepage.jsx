import './Homepage.css'
import React, {useState} from 'react';
import StartBar from './StartBar';
import StartMenu from './StartMenu';
import useDragger from '../hooks/useDragger';
import BioModal from './BioModal';

function Homepage() {
    const [openMenu, setOpenMenu] = useState(false);
    const [bioModal, setBioModal] = useState(false);

    // useDragger("pink-box")

    const handleBioOpen = () => {
      setBioModal(true)
    }

    const handleBioToggle = () => {
        setBioModal(!bioModal)
      
    }

    const handleBioClose = () => {
        setBioModal(false)
      
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
            <BioModal props={{bioModal, setBioModal}} />
            {openMenu
                ?
                <StartMenu/>
                :
                null
            }
            <StartBar props={{openMenu, setOpenMenu, bioModal, setBioModal}}/>
        </div>
    );
}

export default Homepage;