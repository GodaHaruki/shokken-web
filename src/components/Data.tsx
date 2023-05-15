import { createContext, useContext, useRef } from "react";

type Cache = {
    auth: {
        loginToken: String | undefined
    }
    user: {
        mailAddress: String | undefined
    }
}

export function Cache(children: any){
    const c: Cache = {
        auth: {
            loginToken: undefined,
        },
        user: {
            mailAddress: undefined,
        }
    };
    const cacheData = useRef(c);
    const CacheContext = createContext(cacheData);
    return (
        <CacheContext.Provider value={cacheData}>
            {children}
        </CacheContext.Provider>
    )
}