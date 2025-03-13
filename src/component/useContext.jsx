import React, { createContext, useState } from 'react'

const Balue = createContext();
function UseContext({children}) {
    const [v,seTvalue]=useState('abdalla');
    function change(p){
        seTvalue(p);  
    }
    return (
        <Balue.Provider value={{v,change}}>
            {children}
        </Balue.Provider>
  )
}

export  {UseContext ,Balue }
