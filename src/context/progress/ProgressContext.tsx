import React, { useMemo } from "react"
import { progressReducer } from './ProgressReducer'
import { ProgressState,ProgressApi,Api_UpdateLoading_Param,Api_UpdateError_Param } from "./type.progress"

const ProgressStateCtx= React.createContext<ProgressState>({} as ProgressState)
const ProgressDispatchCtx= React.createContext<ProgressApi>({} as ProgressApi)

function ProgressProvider({ children }:{children: React.ReactNode}) {
   
    const initialState:ProgressState= {
      loading: {
				state: false,
				description: ''
			},
      error: {
				state: false,
        error: null,
				description: ''
			}, 
  
    }

    const [state, dispatch] = React.useReducer(progressReducer, initialState);
    
    const api = useMemo(() => {	

      async function updateLoading(param:Api_UpdateLoading_Param):Promise<void>{
        try{
          dispatch({ 
						type: 'update_loading',
						payload: param
					})   
        }catch(e){
          updateError({
							state: true,
              error: e,
							description: 'update_loading failed'
						}
					)
        }
      }

			async function updateError(param:Api_UpdateError_Param):Promise<void>{
        try{
          dispatch({ 
						type: 'update_error',
						payload: param
					})   
        }catch(e){
          updateError({
						state: true,
            error: e,
						description: 'update_error failed'
					}
				)
        }
      }

			async function resetLoading():Promise<void>{
        try{
          dispatch({ 
						type: 'reset_loading'
					})   
        }catch(e){
          updateError({
						state: true,
            error: e,
						description: 'reset_error failed'
					}
				)
        }
      }

			async function resetError():Promise<void>{
        try{
          dispatch({ 
						type: 'reset_error'
					})   
        }catch(e){
          updateError({
						state: true,
            error: e,
						description: 'reset_error failed'
					}
				)
        }
      }

      return { 
        updateError,
				updateLoading,
				resetError,
				resetLoading
      }
    },[])

  return (
    <ProgressStateCtx.Provider value={state}>
    <ProgressDispatchCtx.Provider value={api}>
      {children}
    </ProgressDispatchCtx.Provider>
    </ProgressStateCtx.Provider>
  )
}

function useProgressState() {
    const context = React.useContext(ProgressStateCtx);
    
    if (context === undefined) {
      throw new Error('useProgressState must be used within a ProgressProvider');
    }
    return context;
 
}

function useProgressDispatch() {
    const context = React.useContext(ProgressDispatchCtx);
    if (context === undefined) {
      throw new Error('useProgressDispatch must be used within a ProgressProvider');
    }
    return context;
}

export { ProgressProvider, useProgressState, useProgressDispatch }