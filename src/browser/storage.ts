const STRING_IDENTIFY = 'STRING_INDENTIFY_MARIO_JS'

const useStorage = (storage: Storage) => {
  return {
    get(key: string) {
      return this.deserialize(storage.getItem(key))
    },
    set(key: string, val: any) {
      if (val === undefined) {
        return this.remove(key)
      }
      storage.setItem(key, this.serialize(val))
    },
    remove(key: string) {
      storage.removeItem(key)
    },
    clear() {
      storage.clear()
    },
    deserialize(val: any) {
      if (typeof val !== 'string') return undefined
      try {
        if (val.endsWith(STRING_IDENTIFY)) {
          return val.split(STRING_IDENTIFY)[0]
        } else {
          return JSON.parse(val)
        }
      } catch (e) {
        return val
      }
    },
    serialize(val: any) {
      if (typeof val === 'string') return val + STRING_IDENTIFY
      return JSON.stringify(val)
    }
  }
}

const local = useStorage(localStorage)
const session = useStorage(sessionStorage)
const storage = { local, session }

export default storage
export { local, session }