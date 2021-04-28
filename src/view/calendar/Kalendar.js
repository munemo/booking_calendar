import {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


const Kalendar = () => {

    const [date, setDate] = useState(new Date())

    const onChange = date => {

    setDate(date)

    }

    return (
        <div>
         <Calendar showWeekNumbers onChange={onChange} value={date}/> 
                    {date.toString()}
        </div>
    )
}

export default Kalendar
