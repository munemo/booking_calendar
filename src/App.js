import { Navigation } from './components/navigation/Navigation'
import {Routes} from './routes/Routes'
import './shared/global/Global.css'

export const App = () => {
  return (
    <div>
       <Routes><Navigation/></Routes>
    </div>
  );}