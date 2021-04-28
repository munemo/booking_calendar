import './MobileNavigation.css'
import {useState} from 'react'
import {HamburgerButton} from './hamburgerButton/HamburgerButton'
import {SideBar} from './sidebar/SideBar'
import { Backdrop } from '../../backdrop/Backdrop'

export const MobileNavigation = () => {
const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <div>
        <HamburgerButton  drawerHandler={setOpenDrawer}/>
        <SideBar drawerIsopen={openDrawer} drawerHandler={setOpenDrawer}/>
        {! openDrawer ||  <Backdrop drawerHandler={setOpenDrawer}/>}
            
        </div>
)}