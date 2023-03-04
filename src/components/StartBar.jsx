import './StartBar.css'
import React, {useState, useEffect, useContext, useRef, createRef} from 'react';
import GlobalContext from '../GlobalContext';

function StartBar({props}) {
    const {bioRef, pages, setPages, selected, setSelected } = useContext(GlobalContext);

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
      console.log('here');
      selected === page ? setSelected("") : setSelected(page);
      console.log(bioRef.current.style.display, bioRef.current.classList.contains("top"))
      if(page === "Bio") {
        bioRef.current.style.display =
          bioRef.current.style.display === "flex" &&
          bioRef.current.classList.contains("top")
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
                    className={selected ? 'program-button clicked' : 'program-button'}
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