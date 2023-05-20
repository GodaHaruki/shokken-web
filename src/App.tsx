import { Login } from './components/Login'
import { Logined } from './routing/Auth'


function App() {
  return (
    <>
      {/* route="home or anything like this" */}
      <Logined checkingIsLogin={"loading"}>
        Logined
      </Logined>
      {/* route="./login" */}
      <Login />
    </>
  )
}

export default App
