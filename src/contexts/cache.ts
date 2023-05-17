import Dexie from 'dexie'

export const cache = new Dexie("cache")

cache.version(1).stores({
  
})