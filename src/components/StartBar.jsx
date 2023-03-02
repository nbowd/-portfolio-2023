import './StartBar.css'
import React, {useState, useEffect} from 'react';

function StartBar(props) {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
      let timer = setInterval(()=>setDate(new Date()), 1000);
      return function cleanup() {
        clearInterval(timer)
      }
    })

    return (
        <div className='start-bar'>
            <button className='start-button'><img src="src\assets\win95.png" alt="w95 icon" className='win95-icon'/> Start</button>
            <button className='time-button'>{date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</button>
        </div>
    );
}

export default StartBar;