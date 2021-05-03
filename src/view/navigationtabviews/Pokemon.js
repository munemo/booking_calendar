import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Routingpath from '../../routes/RoutingPath' 
import PokemonAPIService from '../../shared/api/service/PokemonAPIService'

export const Pokemon = () => { 
     const history = useHistory()

    const [APIData, setAPIData] = useState([])
    const [loading, Setloading] = useState(true)
  
    const fetch100 = async () => {
        try{
                    const {data} = await PokemonAPIService.get100Pokemons()
                    setAPIData(data)
                    Setloading(false)
        }
        catch(error){
            console.log('error!!!',error)
        }
    }

            useEffect(()=> {

            fetch100()
            },[])

            const displayData = () => {
                if(!loading)
                {return APIData.results?.map((x)=>
                    <div key={x.name}>
                    <h1 onClick={()=> history.push(Routingpath.itemDetailView, x)}>{x.name} </h1>
                </div>
                

            )
        }}
        
            return (
        <div>
            <h1>Pokemon API</h1><br></br>

            {displayData()}
        </div>
    )
}

