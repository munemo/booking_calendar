import './DesktopNavigation.css'
import {useHistory} from 'react-router-dom'
import logo from '../../../shared/images/logo.png'
import RoutingPath from '../../../routes/RoutingPath'



export const DesktopNavigation = () => {

    const history = useHistory()
    return (
        <div className='desktopNavigationWrapper'>
                <img className='navlogo' onClick={()=> history.push(RoutingPath.homeView)} src={logo} alt={'error..'}/>
                <span className='aboutButton' onClick={()=> history.push(RoutingPath.aboutView)}>About</span>
                <span className='calendarButton' onClick={()=> history.push(RoutingPath.calendarView)}>Calendar</span>
                <span className='registerButton' onClick={()=> history.push(RoutingPath.registerView)}>Register</span>
                <span className='loginButton' onClick={()=> history.push(RoutingPath.loginView)}>Login</span>           
        </div>
)}