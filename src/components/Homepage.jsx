import './Homepage.css'
import React, {useState} from 'react';
import StartBar from './StartBar';
import StartMenu from './StartMenu';

function Homepage() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className='homepage'>
            <div className="homepage-items">
                <div className="homepage-item">
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
            {openMenu
                ?
                null
                :
                <StartMenu/>
            }
            <StartBar props={{openMenu, setOpenMenu}}/>
        </div>
    );
}

export default Homepage;