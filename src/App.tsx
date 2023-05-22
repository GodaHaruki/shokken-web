// import { Login } from './components/Login'
import Home from './components/Home'
import { Logined } from './routing/Auth'

function App() {
  return (
    <>
      {/* route="home or anything like this" */}
      {/* <Logined>
        Logined
      </Logined> */}
      <Home />
      {/* route="./login" */}
      {/* <Login /> */}
    </>
  )
}

export default App
