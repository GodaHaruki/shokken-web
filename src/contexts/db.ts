import Dexie from 'dexie'

export const DB = new Dexie("AppDB")

DB.version(1).stores({
  cache: "&name, data"
})

export type Cache = {
  name: string
  data: any
}

// todo! add put function to check type

export const cache = DB.table("cache")


