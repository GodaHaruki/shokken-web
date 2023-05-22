import React, { useState } from 'react'
import { useUserDataContext } from '../contexts/UserDataCtx'
import { Login } from '../components/Login'

type LoginedProps = {
  children: React.ReactNode
}

function Loading() {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <div className="h-5 w-5 animate-spin rounded-full border-[1.5px] border-blue-500 border-t-transparent" />
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

  getIsLogin().then((v) => {
    if (v) {
      setView(props.children)
    } else {
      setView(<Login />)
    }
  })

  return <>{view}</>
}

type LoginedOrProps = {
  children: React.ReactNode
  or: React.ReactNode
}

export function LoginedOr(props: LoginedOrProps) {
  const [view, setView] = useState<React.ReactNode>(<Loading />)

  const { getIsLogin } = useUserDataContext()

  getIsLogin().then((v) => {
    if (v) {
      setView(props.children)
    } else {
      setView(props.or)
    }
  })

  return <>{view}</>
}
