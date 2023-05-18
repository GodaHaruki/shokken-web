import Dexie from 'dexie'

export const DB = new Dexie("AppDB")

DB.version(1).stores({
  cache: "&name, data"
})


export const cache = DB.table("cache")


