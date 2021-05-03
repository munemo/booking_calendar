import {useLocation} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Axios from 'axios'
import loading from "../shared/images/loading.jpg"

export const ItemView = () => {
   
    const [APIData,setAPIData] = useState()
    const [loading, setLoading] = useState(true)

    const location = useLocation()
    
    const fetchData = async () => {
            try{
                const {data} = await Axios.get(location.state.url)
                setAPIData(data)
                setLoading(false)
            }
            catch(error){
                console.log('ItemView error!!!!', error)                
            }
    } 

    const displayData = () => {
        if(!loading)
        return (
        <div>
            <h1>Picture: <img src={APIData?.sprites?.front_default} alt="picture not found"/> </h1>
            <h1>Name: {APIData?.name}</h1>
            <h1>Height: {APIData?.height} cm</h1>
            <h1>Weight: {APIData?.weight} kg</h1>
       </div>
    )}

    useEffect(()=> {
            fetchData()

    },[])

    return (
            loading ? <img src={loading} alt="image error"/> : 
        <div>
            
          {displayData()}                    
        </div>
    )
}

