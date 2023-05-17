import { useRef, useContext, createContext, useEffect } from "react";
import { cache } from "./cache";

type User {
  isLogin: boolean
  userName: string?
}

const UserDataCtx = createContext<React.MutableRefObject<User>>(useRef<User>({
  isLogin: false,
  userName: null,
}))

export function useUserDataContext(){
  return useContext(UserDataCtx);
}

export function UserDataProvider({ children }: any) {
  const data = useRef({ isLogin: false, userName: null })
  useEffect(() => {
    // todo!
  }, [data.current])

  return (
    <UserDataCtx.Provider value={data}> // todo!
      {children}
    </UserDataCtx.Provider>
  )
}