import StarWarsAPIService from '../../shared/api/service/StarWarsAPIService'
import {useState} from 'react'

export const StarWars = () => {

    const [data, setData] = useState()

    const fetchData = async () =>{

        try{
            const response = await StarWarsAPIService.getLukeSkyWalker()
            setData (response.data)

        }catch(error){
            console.log('error occurred', error)

        }
     } 

    return (
        <div>
            <h1>Starwars API</h1>
            <button onClick={()=> fetchData()}>Api call</button>
            <h1>name:{data?.name}</h1>
            <h1>name:{data?.gender}</h1>
            <h1>name:{data?.mass}</h1>
        
       </div>
    )
}

