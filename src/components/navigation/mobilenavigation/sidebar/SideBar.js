import './SideBar.css'

import React from 'react'

export const SideBar = ({drawerIsopen, drawerHandler}) => {
    return (
        <nav className={drawerIsopen? 'side-drawer open' : 'sidedrawer'}>
            <h1 onClick={()=>drawerHandler(false)}>Exit</h1>
            
        </nav>
    )
}
