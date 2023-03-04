import './Homepage.css'
import React, {useState, useRef, useContext} from 'react';
import StartBar from './StartBar';
import StartMenu from './StartMenu';
import BioModal from './BioModal';
import GlobalContext from '../GlobalContext';

function Homepage() {
    const { pages, setPages, selected, setSelected } = useContext(GlobalContext);
    const [openMenu, setOpenMenu] = useState(false);

    const handleClick = (name) => {
        setSelected(name)
        if(!pages.includes(name)) {
            setPages([...pages, name])
        }
    }

    return (
        <div className='homepage'>
            <div className="homepage-items">
                <div className="homepage-item" onClick={()=>handleClick('Bio')}>
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

            {pages.includes('Bio') && <BioModal />}
            {openMenu && <StartMenu/>}
            <StartBar props={{openMenu, setOpenMenu}}/>
        </div>
    );
}

export default Homepage;