import {useContext, useEffect} from 'react'
import {UserContext} from '../shared/provider/UserProvider'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { LoginView } from '../view/navigationtabviews/LoginView'
import { RegisterView } from '../view/navigationtabviews/RegisterView'
import {HomeView} from '../view/navigationtabviews/HomeView'
import RoutingPath from './RoutingPath'
import { NewBookings } from '../view/profiledropdownviews/NewBookings'
import { CurrentBookings } from '../view/profiledropdownviews/CurrentBookings'
import { Profile } from '../view/profiledropdownviews/Profile'
import {StarWars} from '../view/navigationtabviews/StarWars'
import {Pokemon} from '../view/navigationtabviews/Pokemon'
import {ItemView} from '../view/ItemView'


export const Routes = ({children}) => {

    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
   
    const blockIfAuthenticated = (navigateToViewIfAuthenticated) => {
       return authenticatedUser ? HomeView : navigateToViewIfAuthenticated    
   }

    const requireAuthentication = (navigateToViewIfAuthenticated) => {
       return authenticatedUser ? navigateToViewIfAuthenticated : HomeView
   }
   
   
    const checkIfUserIsAuthenticated = () => {

        const getlocalStorage = localStorage.getItem('username')
        if(getlocalStorage)
        if(authenticatedUser)
   
        {       
            checkIfUserIsAuthenticated(getlocalStorage)

        }
        
      
        }

    
    return (
        <div>
            <BrowserRouter>
                {children}
                <Switch>
                    <Route exact path={RoutingPath.loginView} component={blockIfAuthenticated(LoginView)}/>
                    <Route exact path={RoutingPath.registerView} component={blockIfAuthenticated(RegisterView)}/>
                    <Route exact path={RoutingPath.newBookingsView} component={requireAuthentication(NewBookings)}/>
                    <Route exact path={RoutingPath.currentBookingsView} component={requireAuthentication(CurrentBookings)}/>
                    <Route exact path={RoutingPath.profileView} component={requireAuthentication(Profile)}/>
                    <Route exact path={RoutingPath.starwarsView} component={StarWars}/>
                    <Route exact path={RoutingPath.pokemonView} component={Pokemon}/>
                    <Route exact path={RoutingPath.itemDetailView} component={ItemView}/>

                    <Route component={HomeView} />
                </Switch>
            </BrowserRouter>
            
        </div>
    )}