import React from 'react'
import { toast } from 'react-toastify'

const App = () => {

  const notifyHandler = () => {
    toast.success('User notify successfuly.')
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button onClick={notifyHandler}>Notify</button>
    </>
  )
}

export default App;