import React,{useRef} from 'react'

function UseRefHook() {

    const val = useRef()

    function sub () {
      console.log(val.current.value);
      val.current.focus()
      
    }

  return (
    <div>
        <input ref={val} type="text" />
        <button onClick={sub}>click</button>
    </div>
  )
}

export default UseRefHook

