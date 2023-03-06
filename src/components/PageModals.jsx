import React, {useContext} from 'react';
import GlobalContext from '../GlobalContext';

import BioModal from './BioModal';
import RecycleModal from './RecycleModal';
import OldResumeModal from './OldResumeModal';
import ProjectsModal from './ProjectsModal';
import JamSessionModal from './JamSessionModal';
import MarinaAPIModal from './MarinaAPIModal';
import BooknookModal from './booknookModal';
import CrowdFlowModal from './CrowdFlowModal';

function PageModals() {
    const { pages } = useContext(GlobalContext);

    return (
        <>
            {pages.includes('Bio') && <BioModal/>}
            {pages.includes('Recycle Bin') && <RecycleModal />}
            {pages.includes('OldResume') && <OldResumeModal />}
            {pages.includes('Projects') && <ProjectsModal />}
            {pages.includes('Jam Session') && <JamSessionModal />}
            {pages.includes('Marina API') && <MarinaAPIModal />}
            {pages.includes('Booknook') && <BooknookModal />}
            {pages.includes('CrowdFlow') && <CrowdFlowModal />}  
        </>
    );
}

export default PageModals;