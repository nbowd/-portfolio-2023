import './Homepage.css'
import React, {useState, useRef, useContext} from 'react';
import GlobalContext from '../GlobalContext';

import StartBar from './StartBar';
import StartMenu from './StartMenu';
import BioModal from './BioModal';
import RecycleModal from './RecycleModal';
import OldResume from './OldResume';
import Projects from './Projects';

import myComputer from '../assets/mycomputer.png';
import recycleBin from '../assets/recycle.png'
import projectsFolder from '../assets/folder.png'
import minesweeperLogo from '../assets/minesweeper.png'

function Homepage() {
    const { pages, setPages, selected, setSelected } = useContext(GlobalContext);
    const [openMenu, setOpenMenu] = useState(false);

    const handleClick = (ref, name) => {
        setSelected(name);
        if (!pages.includes(name)) {
          setPages([...pages, name]);
        }
      };

    return (
        <div className='homepage'>
            <div className="homepage-items">
                <div className="homepage-item" onClick={(e)=>handleClick(e, 'Bio')}>
                    <div className="item-icon">
                        <img src={myComputer} alt="" />
                    </div>
                    <div className="item-title">
                        My Bio
                    </div>
                </div>
                <div className="homepage-item" onClick={(e)=>handleClick(e, 'Recycle Bin')}>
                    <div className="item-icon">
                        <img src={recycleBin} alt="" />
                    </div>
                    <div className="item-title">
                        Recycle Bin
                    </div>
                </div>
                <div className="homepage-item" onClick={(e)=>handleClick(e, 'Projects')}>
                    <div className="item-icon">
                        <img src={projectsFolder} alt="" />
                    </div>
                    <div className="item-title">
                        Projects
                    </div>
                </div>
                <div className="homepage-item">
                    <div className="item-icon">
                        <img src={minesweeperLogo} id='minesweeper-icon' alt="" />
                    </div>
                    <div className="item-title">
                        Minesweeper
                    </div>
                </div>
            </div>

            {pages.includes('Bio') && 
                <BioModal
                    display={ pages.includes("Bio") ? "flex": "none"}
                />}

            {pages.includes('Recycle Bin') && 
                <RecycleModal 
                    display={ pages.includes("Recycle Bin") ? "flex": "none"} 
                />}

            {pages.includes('OldResume') &&
                <OldResume 
                    display={pages.includes("OldResume") ? "flex" : "none"}
                />}

            {pages.includes('Projects') &&
                <Projects 
                    display={pages.includes("Projects") ? "flex" : "none"}
                />}

            {openMenu && <StartMenu/>}
            <StartBar props={{openMenu, setOpenMenu}}/>
        </div>
    );
}

export default Homepage;