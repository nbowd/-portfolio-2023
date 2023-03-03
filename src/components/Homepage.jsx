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
    const [tabOrder, setTabOrder] = useState([]);
    // useDragger("pink-box")

    const bioTabRef = useRef(null);

    const bioProps = {bioTabRef, bioModal, setBioModal, bioTabVisible, setBioTabVisible};
    
    const handleModalOpen = (ref, tabVisible, setModal, setTabVisible, tabType) => {
        if (tabVisible) {
            ref.current.classList.add('clicked');
        }
        setModal(true);
        setTabVisible(true);
        setTabOrder([...tabOrder, tabType])
    }

    const handleModalToggle =(ref, modalValue, setModal) => {
        ref.current.classList.toggle('clicked');
        setModal(!modalValue)
    }

    const handleModalClose = (ref, setModal, setTabVisible) => {
        ref.current.classList.remove('clicked')
        setModal(false)
        setTabVisible(false)
    }

    return (
        <div className='homepage'>
            <div className="homepage-items">
                <div className="homepage-item" onClick={()=>handleModalOpen(bioTabRef, bioTabVisible, setBioModal, setBioTabVisible, 'bio')}>
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
            <BioModal props={{bioProps, handleModalClose, handleModalToggle}} />
            {openMenu
                ?
                <StartMenu/>
                :
                null
            }
            <StartBar props={{openMenu, setOpenMenu, handleModalOpen, handleModalToggle, handleModalClose, bioProps, tabOrder}}/>
        </div>
    );
}

export default Homepage;