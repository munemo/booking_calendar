import './MobileNavigation.css'
import '../../backdrop/Backdrop'
import {useEffect, useState} from 'react'
import {HamburgerButton} from './hamburgerButton/HamburgerButton'
import {SideBar} from './sidebar/SideBar'
import { Backdrop } from '../../backdrop/Backdrop'

export const MobileNavigation = () => {
const [openDrawer, setOpenDrawer] = useState(true)

    return (
        <div>
        <HamburgerButton  drawerHandler={setOpenDrawer}/>
        <SideBar drawerIsopen={openDrawer} drawerHandler={setOpenDrawer}/>
        {! openDrawer ||  <Backdrop/>}
            
        </div>
)}