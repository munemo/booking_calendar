import './DesktopNavigation.css'
import {useHistory} from 'react-router-dom'
import logo from '../../../shared/images/logo.png'
import RoutingPath from '../../../routes/RoutingPath'
import {useContext} from 'react'
import {UserContext} from '../../../shared/provider/UserProvider'
import {Profile} from '../../../components/profile/Profile'

export const DesktopNavigation = () => {
        const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
        const history = useHistory()

        const displayAuthUserOrLogin = () => {
                return authenticatedUser
                ? <span className='authUserNavigation'><Profile/></span>
                : <span className='loginButton' onClick={()=> history.push(RoutingPath.loginView)}>Login</span>
                }
                           
    return (
        <div className='desktopNavigationWrapper'>
                <img className='navlogo' onClick={()=> history.push(RoutingPath.homeView)} src={logo} alt={'error..'}/>
                <span className='registerButton' onClick={()=> history.push(RoutingPath.registerView)}>Register</span>
                {displayAuthUserOrLogin()}
        </div>
)}