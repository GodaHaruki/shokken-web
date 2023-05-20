import { Login } from './components/Login'
import { useUserDataContext } from './contexts/UserDataCtx'


function App() {
  const {setIsLogin, getIsLogin} = useUserDataContext()
  return (
    <>
    <button onClick={() => setIsLogin(false)}>Logout</button>
    {getIsLogin()? <>Logined</>:<Login />}

    </>
  )
}

export default App
