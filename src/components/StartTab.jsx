import './StartBar.css'

import React from 'react';

const StartTab = React.forwardRef(({props, children}, ref) => {
    const {handleModalToggle, bioProps} = props;
    const {bioTabRef, bioModal, setBioModal, bioTabVisible, setBioTabVisible} = bioProps;
  return <button className='program-button clicked' onClick={() => handleModalToggle(bioTabRef, bioModal, setBioModal)}  ref={ref}>{children}</button>
}) 
export default StartTab;