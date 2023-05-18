import { useRef, useContext, createContext, useEffect } from "react";
import { cache } from "./db";

type User = {
  isLogin: boolean
  userName: string | undefined
}

type UserUtil = {
  setIsLogin: (arg0: boolean) => void
  getIsLogin: () => boolean

  setUserName: (arg0: string) => void
  getUserName: () => string | undefined
}

export function useUserDataContext() {
  return useContext(UserDataCtx);
}

export function UserDataProvider({ children }: any) {
  const data = useRef<User>({ isLogin: false, userName: undefined }) // todo! read from cache db

  function setIsLogin(b: boolean) { // todo! add to cache db
    data.current.isLogin = b
  }

  function getIsLogin() {
    return data.current.isLogin
  }

  function setUserName(name: string) { // todo! add to cache db
    data.current.userName = name
  }

  function getUserName() {
    return data.current.userName
  }

  return (
    <UserDataCtx.Provider value={{
      setIsLogin: setIsLogin,
      getIsLogin: getIsLogin,
      setUserName: setUserName,
      getUserName: getUserName,
    }}>
      {children}
    </UserDataCtx.Provider>
  )
}

const UserDataCtx = createContext<UserUtil>({
  setIsLogin: function (_arg0: boolean): void {
    throw new Error("Function not implemented.");
  },
  getIsLogin: function (): boolean {
    throw new Error("Function not implemented.");
  },
  setUserName: function (_arg0: string): void {
    throw new Error("Function not implemented.");
  },
  getUserName: function (): string {
    throw new Error("Function not implemented.");
  }
}
)