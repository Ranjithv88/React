import React, { useRef, useState } from 'react'

function UseStateHook() {
    const [value,setValue] = useState('')
    const input = useRef()

    function submit () {
        setValue(input.current.value)
        console.log(input.current.value)
    }

  return (
    <div>
        <label htmlFor="name">name : </label>
        <input name='name' type="text" ref={input}/>
        <h1>my Name is {value}</h1>
        <button type='button' onClick={submit}>submit</button>
    </div>
  )
}

export default UseStateHook

