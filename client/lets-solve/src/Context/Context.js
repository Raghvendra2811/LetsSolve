import React, { useState } from "react";

const Context=React.createContext();


const ContextProvider = ({children})=>{
    let [data,setdata]= useState([])
    return <Context.Provider value={{data,setdata}}>{children}</Context.Provider>
}

export {
    Context,
    ContextProvider
}