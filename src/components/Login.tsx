import { useRef } from "react"
import { useUserDataContext } from "../contexts/UserDataCtx"

export function Login() {
  const email = useRef<string>("")
  const password = useRef<string>("")
  const f = useUserDataContext();

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-white text-sm">
        <div>
          <div className="text-center text-xl">
            Sign in to shokken
          </div>

          <form className="m-3 h-auto w-auto rounded-md border border-gray-300 p-3 px-6">
            <div className="my-2">
              <label htmlFor="email" className="mb-2 block">email address</label>
              <input id="email" type="email" onChange={(e) => email.current = e.target.value} className="input-bordered input input-sm w-full max-w-xs" />
            </div>

            <div className="my-3">
              <div className="relative mb-2 w-full">
                <label htmlFor="password" className="mb-2">password</label>
                <a href="" className="float-right ml-4">forgot a password?</a>
              </div>
              <input id="password" type="password" autoComplete="current-password" className="input-bordered input input-sm w-full max-w-xs" onChange={(e) => password.current = e.target.value} />

            </div>

            <button type="button" onClick={(_e) => {handleOnClick(f,email.current, password.current); console.log(f.getIsLogin())}} className="btn-primary btn-sm btn mt-2 w-full text-xs">login</button>
          </form>
        </div>
      </div>
    </>
  )
}

function handleOnClick(f:{setIsLogin: (b:boolean) => void, setUserName: (s: string) => void}, email: string, password: string) {
  // todo!
  console.log("email: ", email)
  console.log("password: ", password)

  // fetch 
  // if success
  // setIsLogin(true)
  // else
  f.setIsLogin(true)
  f.setUserName("guest")

  // fetch
  // setUserName(name)
}