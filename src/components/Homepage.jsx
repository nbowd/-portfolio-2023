import './Homepage.css'
import React, {useState, useRef, useContext} from 'react';
import GlobalContext from '../GlobalContext';

import StartBar from './StartBar';
import StartMenu from './StartMenu';
import BioModal from './BioModal';
import RecycleModal from './RecycleModal';
import OldResumeModal from './OldResumeModal';
import ProjectsModal from './ProjectsModal';
import JamSessionModal from './JamSessionModal';
import MarinaAPIModal from './MarinaAPIModal';
import BooknookModal from './booknookModal';
import CrowdFlowModal from './CrowdFlowModal';

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

            {pages.includes('Bio') && <BioModal/>}

            {pages.includes('Recycle Bin') && <RecycleModal />}

            {pages.includes('OldResume') && <OldResumeModal />}

            {pages.includes('Projects') && <ProjectsModal />}

            {pages.includes('Jam Session') && <JamSessionModal />}
            
            {pages.includes('Marina API') && <MarinaAPIModal />}
            
            {pages.includes('Booknook') && <BooknookModal />}
            
            {pages.includes('CrowdFlow') && <CrowdFlowModal />}

            {openMenu && <StartMenu/>}
            <StartBar props={{openMenu, setOpenMenu}}/>
        </div>
    );
}

export default Homepage;