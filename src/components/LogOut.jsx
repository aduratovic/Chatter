import React from 'react'
import {auth} from '../firebase'

const style = {
    button: `bg-teal-900 px-4 py-2 border-2 border-stone-400 hover:bg-teal-400 rounded text-stone-300 `
}


const LogOut = () => {
const signOut = () => {
    signOut(auth)
}

  return (
    <button onClick={() => auth.signOut()} className={style.button}>
        Logout
    </button>
  )
}

export default LogOut;