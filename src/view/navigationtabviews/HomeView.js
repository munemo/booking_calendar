import styled from "styled-components";
import {useState} from 'react'
import Kalendar from '../calendar/Kalendar'

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
    justify-self: center;
    `

        export const HomeView = () => {

         const [data,setData] = useState()

             const fetchData = async () => {

               
                }

            return (
                <div> 
                     

                    <StyledRegisterWrapper>
                        <StyledRegisterTitle>Laundry Booking Calendar</StyledRegisterTitle> 
                        
                          
                    </StyledRegisterWrapper>

                   <Kalendar/>
                   
                </div>
            )
        }
