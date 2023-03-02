import './Homepage.css'
import React, {useState} from 'react';
import StartBar from './StartBar';
import StartMenu from './StartMenu';

function Homepage() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className='homepage'>
            <h1>Hello World!</h1>
            {openMenu
                ?
                null
                :
                <StartMenu/>
            }
            <StartBar props={{openMenu, setOpenMenu}}/>
        </div>
    );
}

export default Homepage;