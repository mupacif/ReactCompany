
import React,{  useContext }  from 'react';
import ParseService from './ParseService'



const ParseContext = React.createContext();

function useParse() {
  return useContext(ParseContext);
}

function ProvideParse({ children }) {
  return (
    <ParseContext.Provider value={new ParseService()}>
      {children}
    </ParseContext.Provider>
  );
}

export {
  useParse,
  ProvideParse
}