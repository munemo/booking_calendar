import {useHistory} from 'react-router-dom'
import logotyp from '../../../shared/images/logotyp.png'
import RoutingPath from '../../../routes/RoutingPath'
import {useContext} from 'react'
import {UserContext} from '../../../shared/provider/UserProvider'
import {Profile} from '../../../components/profile/Profile'

import styled from "styled-components";

export const DesktopNavigation = () => {
        //eslint-disable-next-line
        const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
        const history = useHistory()

        const displayAuthUserOrLogin = () => {
                return authenticatedUser
                ? <span ><Profile/></span>
                : <span onClick={()=> history.push(RoutingPath.loginView)}>Login</span>
                }

        const StyledDesktopNavigation = styled.header`
        background: blue;
        display:grid;
        grid-template-columns: repeat(10,1fr);
        padding: 20px;
        color: black;      
        text-transform: uppercase;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;`

        const StyledLogin = styled.button`
        font-size: 1em;
        margin: 1em;
        border: 2px solid black;
        border-radius: 10px;
        height: 40%;
        width: 60%; `

        const StyledRegister = styled.button`
        cursor: pointer; 
        grid-column: 9/10;
        grid-rows: 9/10;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid black;
        border-radius: 10px;
        height: 40%;
        width: 60%; `

        const StyledLogo = styled.img`
        cursor: pointer;`
        
 
          return (
                <div>
                        < StyledDesktopNavigation >
                        <StyledLogo onClick={()=> history.push(RoutingPath.homeView)} src={logotyp} alt={'error..'}></StyledLogo>
                        <StyledRegister onClick={()=> history.push(RoutingPath.registerView)}>Register</StyledRegister>
                        <StyledRegister onClick={()=> history.push(RoutingPath.starwarsView)}>Starwars</StyledRegister>
                        <StyledRegister onClick={()=> history.push(RoutingPath.pokemonView)}>Pokemon</StyledRegister>
                        <StyledLogin >{displayAuthUserOrLogin()}</StyledLogin>
                        </StyledDesktopNavigation>
                </div>
)}