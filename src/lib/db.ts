import Dexie from 'dexie'

export const DB = new Dexie("AppDB")

DB.version(1).stores({
  cache: "&name, value"
})

export type Cache<T> = {
  name: string
  value: T
}

// todo! add put function to check type

export const cache = DB.table("cache")
