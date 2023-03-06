import React, {useContext} from 'react';
import GlobalContext from '../GlobalContext';

import Icon from './Icon';

import myComputer from '../assets/mycomputer.png';
import recycleBin from '../assets/recycle.png'
import projectsFolder from '../assets/folder.png'
import minesweeperLogo from '../assets/minesweeper.png'

function HomepageIcons() {
    const { pages, setPages, setSelected } = useContext(GlobalContext);

    const handleClick = (ref, name) => {
        setSelected(name);
        if (!pages.includes(name)) {
          setPages([...pages, name]);
        }
      }; 

    return (
        <div className="homepage-items">
            <div className="homepage-item" onClick={(e)=>handleClick(e, 'Bio')}>
                <Icon 
                    name="My Bio"
                    image={myComputer}
                    alt="My Bio Icon"
                />
            </div>
            <div className="homepage-item" onClick={(e)=>handleClick(e, 'Recycle Bin')}>
                <Icon 
                    name="Recycle Bin"
                    image={recycleBin}
                    alt="Recycle Bin Icon"
                />
            </div>
            <div className="homepage-item" onClick={(e)=>handleClick(e, 'Projects')}>
                <Icon 
                    name="Projects"
                    image={projectsFolder}
                    alt="Projects Icon"
                />
            </div>
            <div className="homepage-item">
                <Icon
                    name="Minesweeper"
                    image={minesweeperLogo}
                    alt="Minesweeper Icon"
                />
            </div>
        </div>
    );
}

export default HomepageIcons;