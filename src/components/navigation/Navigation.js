import {DesktopNavigation} from  './desktopnavigation/DesktopNavigation'
import {useWindowDimensions} from '../../hooks/useWindowDimensions'
import {MobileNavigation} from '../navigation/mobilenavigation/MobileNavigation'


export const Navigation = () => {
    const { width } = useWindowDimensions()

    const navigationViewPort = () =>{

        return width <= 1100? <MobileNavigation/> : <DesktopNavigation/>
    }
    return (
        <div>
            {navigationViewPort()}
            
        </div>
    )
}
