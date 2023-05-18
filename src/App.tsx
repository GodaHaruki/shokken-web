import { Login } from './components/Login'
import { UserDataProvider } from './contexts/UserDataCtx'

function App() {

  return (
    <>
      <UserDataProvider>
        <Login />
      </UserDataProvider>
    </>
  )
}

export default App
