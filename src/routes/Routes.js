import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { AboutView } from '../view/navigationtabviews/AboutView'
import { LoginView } from '../view/navigationtabviews/LoginView'
import { RegisterView } from '../view/navigationtabviews/RegisterView'
import { CalendarView } from '../view/navigationtabviews/CalendarView'
import {HomeView} from '../view/navigationtabviews/HomeView'
import RoutingPath from './RoutingPath'


export const Routes = ({children}) => {
    return (
        <div>
            <BrowserRouter>
                {children}
                <Switch>
                    <Route exact path= {RoutingPath.aboutView} component={AboutView}/>
                    <Route exact pat={RoutingPath.loginView} component={LoginView}/>
                    <Route exact pat={RoutingPath.registerView} component={RegisterView}/>
                    <Route exact pat={RoutingPath.calendarView} component={CalendarView}/>
                    <Route component={RoutingPath.homeView}/>
                </Switch>
            </BrowserRouter>
            
        </div>
    )}