import styled from "styled-components";


    const StyledRegisterWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(10,1fr);
    grid-template-rows: repeat(10,1fr);
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;`

    const StyledRegisterTitle = styled.h1`
    grid-column: 2/10;
    align-self: center;
    justify-self: center;`

    const StyledRegisterForm = styled.form`
    grid-column: 2/10;
    align-self: center;
    justify-self: center;`

    const StyledRegisterButton = styled.button`
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


export const RegisterView = () => {
    return (
        <div>
    
        <StyledRegisterWrapper>
        <StyledRegisterTitle>Please Register</StyledRegisterTitle>
        
        <StyledRegisterForm>
        <span><b>Apartment nr:</b> </span> <input /> <br></br><br></br> 
        <span><b>Email:</b> </span> <input /> <br></br><br></br>  
        <span><b>Username:</b> </span> <input /> <br></br><br></br>  
        <span><b>Password:</b> </span> <input /> <br></br><br></br>   
        <StyledRegisterButton>Register</StyledRegisterButton>
        </StyledRegisterForm>    
        </StyledRegisterWrapper>           
        </div>
    )
}
