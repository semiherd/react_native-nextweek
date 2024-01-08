import React,{ useMemo } from 'react';
import { modalReducer } from './ModalReducer';
import { BaseApiParam, ModalParam, ModalState, ModalAPI, ModalName } from './type.modal'
import { CONTEXT_ACTIONS,ModalActionVals } from '../../asset/constant/Actions'

const ModalStateCtx = React.createContext<ModalState<ModalParam<{type:ModalName}>>>({} as ModalState<ModalParam<{type:ModalName}>>)
const ModalDispatchCtx= React.createContext<ModalAPI>({} as ModalAPI)

function ModalProvider({ children }:{children:React.ReactElement}) {

  const initialState:ModalState<ModalParam<{type:ModalName}>>= {
    id: null,
    param: {
      type: null
    }
  }
  const [modalState, dispatch] = React.useReducer(modalReducer, initialState);

  const api = useMemo(() => {
    
    function close() {
      dispatch({ 
        type: CONTEXT_ACTIONS.MODAL.RESET
      })
    }

    function open({id,param}:BaseApiParam) {
      dispatch({ 
        type: CONTEXT_ACTIONS.MODAL.INITIAL , 
        data:{id,param} 
      })
    }

    function insertInput<T>(param:T) {
      dispatch({ 
        type: CONTEXT_ACTIONS.MODAL.SET_INPUT , 
        data: {input:param}
      })
    }
   
    return { open, close, insertInput }
  }, [])

  return (
    <ModalDispatchCtx.Provider value={api}>
      <ModalStateCtx.Provider value={modalState}>
        {children}
        </ModalStateCtx.Provider>
    </ModalDispatchCtx.Provider>
  )
}

function useModalState() {
  const context = React.useContext(ModalStateCtx);
  
  if (context === undefined) {
    throw new Error('useModalState must be used within a ModalProvider');
  }
  return context;
}

function useModalDispatch() {
  const context = React.useContext(ModalDispatchCtx);
  if (context === undefined) {
    throw new Error('useModalDispatch must be used within a ModalProvider');
  }
return context;
}

export { ModalProvider,useModalState,useModalDispatch };