import React, { useMemo } from "react"
import { MessageState, MessageApi } from './type.message'
import { messageReducer } from './MessageReducer'
import { AttachItem } from "../../component/message/type/type.message"

const MessageStateCtx= React.createContext<MessageState>({} as MessageState)
const MessageDispatchCtx= React.createContext<MessageApi>({} as MessageApi)

function MessageProvider({ children }:{children: React.ReactNode}) {

    const initialState:MessageState= {
      attachment: []
    }

    const [state, dispatch] = React.useReducer(messageReducer, initialState)

    const api = useMemo(() => {	
   
      const addFile= (items: AttachItem[]) => {
        try{
          console.log('addFile clicked with items:',items)
          dispatch({
            type: 'add_file',
            payload:{
              param:{
                items
              }
            }
          })
          
        }catch(e){
          console.log(e)
        }
      }
      
      const removeFile= (item: AttachItem) => {
        try{
          dispatch({
            type: 'remove_file',
            payload:{
              param:{
                item
              }
            }
          })
        }catch(e){
          console.log(e)
        }
      }
     
      return { 
        addFile,
        removeFile
      }
    },[])

    return (
      <MessageDispatchCtx.Provider value={api}>
      <MessageStateCtx.Provider value={state}>
        {children}
      </MessageStateCtx.Provider>
      </MessageDispatchCtx.Provider>
    )
}

function useMessageState() {
    const context = React.useContext(MessageStateCtx);  
    if (context === undefined) {
      throw new Error('useMessageState must be used within a MessageProvider');
    }
    return context;
}

function useMessageDispatch() {
    const context = React.useContext(MessageDispatchCtx);
    if (context === undefined) {
      throw new Error('useMessageDispatch must be used within a MessageProvider');
    }
    return context;
}

export { MessageProvider, useMessageState, useMessageDispatch }