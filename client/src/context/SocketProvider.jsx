import React,{createContext,useContext,useMemo} from 'react'
import { io }from "socket.io-client"
const SocketContex=createContext(null);
 export const useSocket=()=>{
    const socket=useContext(SocketContex);
    return socket;
 }
export const SocketProvider = (props)=>{
    const socket=useMemo(()=>io("localhost:8000"),[])
          
    
    return (
        <SocketContex.Provider value={socket}>
            {props.children}
        </SocketContex.Provider>
    )
}
