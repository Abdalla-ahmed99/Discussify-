import React, { useContext, useRef } from 'react'
import { Balue } from './useContext'
function Shop() {
const {v,change} = useContext(Balue);

const reff = useRef(null);
function ch(){
change(reff.current.value);
}

  return (
    <div>
<h1>asdasdasd</h1>
<p>asdasd</p>
<input ref={reff}  onChange={ch} type="text" />
<button>Change</button>
{v}
    </div>
  )
}

export default Shop
