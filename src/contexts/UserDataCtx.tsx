import { useContext, createContext } from 'react'
import { cache, Cache } from '../lib/db'
import { IndexableType, PromiseExtended } from 'dexie'

export type UserUtil = {
  setIsLogin: (arg0: boolean) => PromiseExtended<IndexableType>
  getIsLogin: () => Promise<boolean>

  setUserName: (arg0: string) => PromiseExtended<IndexableType>
  getUserName: () => Promise<string | undefined>
}

const UserDataCtx = createContext<UserUtil>({
  setIsLogin: function (_arg0: boolean): PromiseExtended<IndexableType> {
    throw new Error('Function not implemented.')
  },
  getIsLogin: function (): Promise<boolean> {
    throw new Error('Function not implemented.')
  },
  setUserName: function (_arg0: string): PromiseExtended<IndexableType> {
    throw new Error('Function not implemented.')
  },
  getUserName: function (): Promise<string> {
    throw new Error('Function not implemented.')
  }
})

export function useUserDataContext() {
  return useContext(UserDataCtx)
}

export function UserDataProvider({ children }: any) {
  function setIsLogin(b: boolean) {
    return cache.put({
      name: 'isLogin',
      value: b
    })
  }

  async function getIsLogin() {
    const res = await cache.get('isLogin')
    if (res != undefined) {
      return (res as Cache<boolean>).value
    }
    return false
  }

  function setUserName(name: string) {
    return cache.put({
      name: 'userName',
      value: name
    })
  }

  async function getUserName() {
    const res = await cache.get('userName')
    if (res != undefined) {
      return (res as Cache<string>).value
    }
    return undefined
  }

  return (
    <UserDataCtx.Provider
      value={{
        setIsLogin: setIsLogin,
        getIsLogin: getIsLogin,
        setUserName: setUserName,
        getUserName: getUserName
      }}
    >
      {children}
    </UserDataCtx.Provider>
  )
}
