import {useState, useContext} from 'react'
import {UserContext} from '../../shared/provider/UserProvider'
import {useHistory} from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import styled from "styled-components";


    const StyledLoginWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(10,1fr);
    grid-template-rows: repeat(10,1fr);
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;`

    const StyledLoginTitle = styled.h1`
    grid-column: 2/10;
    align-self: center;
    justify-self: center;`
    
    const StyledLoginForm = styled.form`
    grid-column: 2/10;
    align-self: center;
    justify-self: center;`

    const StyledLoginButton = styled.button`
    cursor: pointer; 
    grid-column: 9/10;
    grid-rows: 9/10;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 10px;
    height: 10%;
    width: 40%; 
    `


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
            <StyledLoginWrapper>
                <StyledLoginTitle>Please Login</StyledLoginTitle>
                    <StyledLoginForm><span><b>Username:</b> </span> <input onChange={event => setUsername(event.target.value)}/> <br></br><br></br>
                    <span><b>Password: </b> <input onChange={event => setUsername(event.target.value)}/></span> <br></br>
                    <StyledLoginButton onClick={() => logIn()}>Login</StyledLoginButton>
                    
            </StyledLoginForm>

            </StyledLoginWrapper>
          
        </div>
    )
}
