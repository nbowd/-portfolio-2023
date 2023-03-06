import './Homepage.css'
import React, {useState} from 'react';

import HomepageIcons from './HomepageIcons';
import PageModals from './PageModals';
import StartBar from './StartBar';
import StartMenu from './StartMenu';


function Homepage() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className='homepage'>
            <HomepageIcons />
            <PageModals />

            {openMenu && <StartMenu/>}
            <StartBar props={{openMenu, setOpenMenu}}/>
        </div>
    );
}

export default Homepage;