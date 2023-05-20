import React, { useState } from "react"
import { useUserDataContext } from "../contexts/UserDataCtx"

type LoginedProps = {
  checkingIsLogin: React.ReactNode
  children: React.ReactNode
}

export function Logined(props: LoginedProps){
  const [view, setView] = useState(props.checkingIsLogin)

  const {getIsLogin} = useUserDataContext()
  getIsLogin().then(v => {
    if(v){
      setView(props.children)
    } else {
      // todo!: back to login page
    }
  })

  return (
    <>
    {view}
    </>
  )
}