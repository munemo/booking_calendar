import {useState, useEffect} from 'react'

export const useDebounce = (value, delay) =>{

    const [debounceValue, setDebounceValue] = useState()

    useEffect(() => {

        const handler = setTimeout(()=>{
            setDebounceValue(value)
        },delay)
        return () => {clearTimeout(handler)}
    },[value])
 
    return debounceValue
}