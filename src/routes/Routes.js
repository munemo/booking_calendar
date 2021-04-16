import {useContext, useEffect} from 'react'
import {UserContext} from '../shared/provider/UserProvider'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { LoginView } from '../view/navigationtabviews/LoginView'
import { RegisterView } from '../view/navigationtabviews/RegisterView'
import {HomeView} from '../view/navigationtabviews/HomeView'
import RoutingPath from './RoutingPath'


export const Routes = ({children}) => {

    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const checkIfUserIsAuthenticated = () => {
     
          const getlocalStorage = localStorage.getItem('username')
        if(getlocalStorage)
        {       
            checkIfUserIsAuthenticated(getlocalStorage)

        }
        
      
        }

    
    return (
        <div>
            <BrowserRouter>
                {children}
                <Switch>
                    <Route exact path={RoutingPath.loginView} component={LoginView}/>
                    <Route exact path={RoutingPath.registerView} component={RegisterView}/>
                    <Route component={HomeView} />
                </Switch>
            </BrowserRouter>
            
        </div>
    )}