import './StartBar.css'
import React, {useState, useEffect, useContext, useRef, createRef} from 'react';
import GlobalContext from '../GlobalContext';

function StartBar({props}) {
    const {bioRef, recycleRef, resumeRef, projectsRef, jamSessionRef, marinaAPIRef, booknookRef, crowdFlowRef, pages, setPages, selected, setSelected } = useContext(GlobalContext);

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
    })

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
      }

    }
    return (
        <div className='start-bar'>
            <div className="start-bar-left">
                {openMenu
                ? 
                <button className='start-button clicked' onClick={()=>setOpenMenu(!openMenu)}><span><img src="src\assets\win95.png" alt="w95 icon" className='win95-icon'/> Start</span></button>
                :
                <button className='start-button' onClick={()=>setOpenMenu(!openMenu)}><img src="src\assets\win95.png" alt="w95 icon" className='win95-icon'/> Start</button>
                }

                {pages.map((page, index) => 
                  <button 
                    key={index}
                    id={page}
                    ref={allItemRefs.current[index]}
                    onClick={() =>  handleTabClick(allItemRefs.current[index], page)}
                    className={selected === page ? 'program-button clicked' : 'program-button notClicked'}
                  >
                    {page}
                  </button>
                )}
            </div>
               
    
            <button className='time-button'>{date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</button>
        </div>
    );
}

export default StartBar;