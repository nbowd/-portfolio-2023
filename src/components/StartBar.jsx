import './StartBar.css'
import React, {useState, useEffect} from 'react';

function StartBar({props}) {
    const [date, setDate] = useState(new Date());
    const {openMenu, setOpenMenu} = props;

    useEffect(() => {
      let timer = setInterval(()=>setDate(new Date()), 1000);
      return function cleanup() {
        clearInterval(timer)
      }
    })

    return (
        <div className='start-bar'>
            <div className="start-bar-left">
                {openMenu
                ? 
                <button className='start-button clicked' onClick={()=>setOpenMenu(!openMenu)}><span><img src="src\assets\win95.png" alt="w95 icon" className='win95-icon'/> Start</span></button>
                :
                <button className='start-button' onClick={()=>setOpenMenu(!openMenu)}><img src="src\assets\win95.png" alt="w95 icon" className='win95-icon'/> Start</button>
                }
            </div>
    
            
            <button className='time-button'>{date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</button>
        </div>
    );
}

export default StartBar;