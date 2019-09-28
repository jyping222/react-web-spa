import Store from 'store'
const USER_KEY='user_key'
export default{
    saveStore(username){
        Store.set(USER_KEY,username)
    },
    getStore(key){
      return  Store.get(key) || {}
    },
    removeStore(key){
        Store.remove(key)
    }
}


