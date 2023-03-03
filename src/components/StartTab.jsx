import './StartBar.css'

import React from 'react';

const StartTab = React.forwardRef(({props, children}, ref) => {
  return <button className='program-button clicked' onClick={props}  ref={ref}>{children}</button>
}) 
export default StartTab;