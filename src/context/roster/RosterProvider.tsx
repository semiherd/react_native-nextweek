import React from "react";
import {RosterState} from './type'
import {rosterReducer} from './RosterReducer';

const RosterStateCtx= React.createContext<RosterState>({} as RosterState)
const RosterDispatchCtx= React.createContext<Dispatch<RosterState>>({} as RosterState)

function RosterProvider({ children }:{children: React.ReactElement}) {
  
  const initialRosterState= {
    activity: [], 
    shift: [],
    overview: []
  }
  const [state, dispatch] = React.useReducer(rosterReducer,initialRosterState) 
  
  return (
    <RosterStateCtx.Provider value={state}>
      <RosterDispatchCtx.Provider value={dispatch}>
        {children}
      </RosterDispatchCtx.Provider>
    </RosterStateCtx.Provider>
  );
}

function useRosterState() {
    const context = React.useContext(RosterStateCtx);
    
    if (context === undefined) {
      throw new Error('useRosterState must be used within a RosterProvider');
    }
    return context;
 
}

function useRosterDispatch() {
  const context = React.useContext(RosterDispatchCtx);
  if (context === undefined) {
    throw new Error('useRosterDispatch must be used within a RosterProvider');
  }
  return context;
}

export { RosterProvider,useRosterState,useRosterDispatch };