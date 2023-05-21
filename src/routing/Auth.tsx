import React, { useState } from "react"
import { useUserDataContext } from "../contexts/UserDataCtx"
import { Login } from "../components/Login"

type LoginedProps = {
  children: React.ReactNode
}

function Loading() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full border-t-transparent border-[1.5px] border-blue-500 h-5 w-5" />
        <div>Loading</div>
      </div>
    </>
  )
}

export function Logined(props: LoginedProps) {
  const [view, setView] = useState<React.ReactNode>(<Loading />)

  const { getIsLogin } = useUserDataContext()

  // for debug <Loading />
  // const sleepGetIsLogin = () => new Promise(res => {
  //   const resolve = res as (value: boolean) => void
  //   setTimeout(async () => resolve(await getIsLogin()), 3000)
  // })

  getIsLogin().then(v => {
    if (v) {
      setView(props.children)
    } else {
      setView(<Login />)
    }
  })

  return (
    <>
      {view}
    </>
  )
}