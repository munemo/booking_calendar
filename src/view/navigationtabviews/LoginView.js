import {useState, useContext} from 'react'
import {UserContext} from '../../shared/provider/UserProvider'
import {useHistory} from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const LoginView = () => {
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    
    const logIn = () =>{
        setAuthenticatedUser(username)
        localStorage.setItem('username', username)
        history.push(RoutingPath.homeView)
    }
   
    return (
        <div>
          <span>Username: </span> <input onChange={event => setUsername(event.target.value)}/> <br></br>
          <button onClick={() => logIn()}> Login</button>

        </div>
    )
}
