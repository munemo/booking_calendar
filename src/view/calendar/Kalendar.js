import TimePicker from 'react-time-picker'
import {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';



const Kalendar = () => {

    const [date, setDate] = useState(new Date())
  
    const [startTime, setStartTime] = useState('')
  // eslint-disable-next-line
    const [endTime, setEndTime] = useState('')
    

        const chooseDate = date => {

        setDate(date)
        }

    /*    const setTime = time => {

            setTime(time)
        }*/

    return (
        <div>
         <Calendar showWeekNumbers onChange={chooseDate} onClick={()=> console.log(date)} value={date}/> <br></br>
         <TimePicker onChange={setStartTime} value={startTime}/>
        <h2>Start time is:  {date.toString()} </h2>
        <TimePicker onChange={setStartTime} value={startTime}/>
        <h2>End time is:  {endTime} </h2>     
        </div>
    )
}

export default Kalendar
