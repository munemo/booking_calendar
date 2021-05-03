import './ProfileDropdown.css'
import {useHistory} from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import {useContext} from 'react'
import {UserContext} from '../../../shared/provider/UserProvider'

export const ProfileDropdown = () => {
    // eslint-disable-next-line
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const history = useHistory()

    const logout = () => {
        setAuthenticatedUser(false)
        localStorage.removeItem('username')
        localStorage.removeItem('password')

        history.push(RoutingPath.homeView)

        


}

    return (
        <div className="profileDropdownWrapper">
            <span>Firstname Lastname</span> <br/>
            <span>Email</span> <br/>
            <hr/>
            <span onClick={() => history.push(RoutingPath.profileView)}>Profile</span> <br/>
            <span>Language: EN</span> <br/>
            <span onClick={() => history.push(RoutingPath.currentBookingsView)}>Current Bookings</span> <br/>
            <span onClick={() => history.push(RoutingPath.newBookingsView)}>New Bookings </span><br/>
            <span onClick={() =>logout()}>Logout</span>
            <hr/>
        </div>
    )
}



