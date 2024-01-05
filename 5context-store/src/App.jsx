
import LogIn from "./component/LogIn"
import Profile from './component/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <LogIn/>
      <Profile />
    </UserContextProvider>
  )
}

export default App
