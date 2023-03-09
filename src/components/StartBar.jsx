import './StartBar.css'
import React, {useState, useEffect, useContext, useRef, createRef} from 'react';
import GlobalContext from '../GlobalContext';

import win95Icon from '../assets/win95.png'
import defaultIcon from '../assets/file.png'
import myComputer from '../assets/mycomputer.png'
import recycleBin from '../assets/recycle.png'
import projectsIcon from '../assets/folder.png'
import minesweeperIcon from '../assets/minesweeper.png'

function StartBar({props}) {
    const {bioRef, recycleRef, resumeRef, projectsRef, jamSessionRef, marinaAPIRef, booknookRef, crowdFlowRef, minesweeperRef, pages, setPages, selected, setSelected } = useContext(GlobalContext);

    const allItemRefs = useRef([]);

    allItemRefs.current = pages.map(
      (element, i) => allItemRefs.current[i] ?? createRef()
    );

    const [date, setDate] = useState(new Date());
    const {openMenu, setOpenMenu} = props;

    useEffect(() => {
      let timer = setInterval(()=>setDate(new Date()), 1000);
      return function cleanup() {
        clearInterval(timer)
      }
    },[])

    const handleTabClick = (ref, page) => {
      selected === page ? setSelected("") : setSelected(page);
      if(page === "Bio") {
        bioRef.current.style.display =
          bioRef.current.style.display === "flex" &&
          bioRef.current.classList.contains("top")
            ? "none"
            : "flex";
      } else if (page === "Recycle Bin") {
        console.log('rec')
        recycleRef.current.style.display = 
          recycleRef.current.style.display === "flex" &&
          recycleRef.current.classList.contains("top")
            ? "none"
            : "flex";
      } else if (page === "OldResume") {
        resumeRef.current.style.display = 
          resumeRef.current.style.display === "flex" &&
          resumeRef.current.classList.contains("top")
            ? "none"
            : "flex";
      } else if (page === "Projects") {
        projectsRef.current.style.display = 
          projectsRef.current.style.display === "flex" &&
          projectsRef.current.classList.contains("top")
            ? "none"
            : "flex";
      } else if (page === "Jam Session") {
        jamSessionRef.current.style.display = 
          jamSessionRef.current.style.display === "flex" &&
          jamSessionRef.current.classList.contains("top")
            ? "none"
            : "flex";
      } else if (page === "Marina API") {
        marinaAPIRef.current.style.display = 
          marinaAPIRef.current.style.display === "flex" &&
          marinaAPIRef.current.classList.contains("top")
            ? "none"
            : "flex";
      } else if (page === "Booknook") {
        booknookRef.current.style.display = 
          booknookRef.current.style.display === "flex" &&
          booknookRef.current.classList.contains("top")
            ? "none"
            : "flex";
      } else if (page === "CrowdFlow") {
        crowdFlowRef.current.style.display = 
          crowdFlowRef.current.style.display === "flex" &&
          crowdFlowRef.current.classList.contains("top")
            ? "none"
            : "flex";
      } else if (page === "Minesweeper") {
        minesweeperRef.current.style.display = 
          minesweeperRef.current.style.display === "flex" &&
          minesweeperRef.current.classList.contains("top")
            ? "none"
            : "flex";
      }

    }

    const getProgramIcon = (page) => {
      let image = defaultIcon;
      if (page === 'Bio') {
        image = myComputer
      }
      if (page === 'Recycle Bin') {
        image = recycleBin
      }
      if (page === 'Projects') {
        image = projectsIcon
      }
      if (page === 'Minesweeper') {
        image = minesweeperIcon
      }      
      return <img src={image} alt="Program Icon" className='tab-icon'/>
    }

    return (
        <div className='start-bar'>
            <div className="start-bar-left">
                {openMenu
                ? 
                <button className='start-button clicked' onClick={()=>setOpenMenu(!openMenu)}><span><img src={win95Icon} alt="w95 icon" className='win95-icon'/> Start</span></button>
                :
                <button className='start-button' onClick={()=>setOpenMenu(!openMenu)}><img src={win95Icon} alt="w95 icon" className='win95-icon'/> Start</button>
                }

                {pages.map((page, index) => 
                  <button 
                    key={index}
                    id={page}
                    ref={allItemRefs.current[index]}
                    onClick={() =>  handleTabClick(allItemRefs.current[index], page)}
                    className={selected === page ? 'program-button clicked' : 'program-button notClicked'}
                  >
                    <span className="button-text">

                      {getProgramIcon(page)}
                      {page}
                    </span>
                  </button>
                )}
            </div>
               
    
            <button className='time-button'>{date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</button>
        </div>
    );
}

export default StartBar;