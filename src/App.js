import { Navigation } from './components/navigation/Navigation'
import {Routes} from './routes/Routes'
import './shared/global/Global.css'
import {UserProvider} from './shared/provider/UserProvider'

export const App = () => {
  return (
    <div>
      <UserProvider> 
        <Routes>
          <Navigation/>
        </Routes>
      </UserProvider>
    </div>
  );}