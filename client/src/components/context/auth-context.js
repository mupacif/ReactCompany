import React, {  useContext, useState } from 'react';
import Parse from 'parse';

const AuthContext = React.createContext({
    authenticated: false,
});


function useAuth() {
    return useContext(AuthContext);
}


function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
      <AuthContext.Provider value={auth}>
        {children}
      </AuthContext.Provider>
    );
  }



function useProvideAuth() {
  const currentUser = Parse.User.current(),
        defaultState =  { 
            authenticated: currentUser ? true:  false,
            user : currentUser
          };


    const [user, setUser] = useState(defaultState);
  
    const signin =  async (usr, cb) =>  {
      const updatedState = { ...user };
      updatedState.authenticated = true;
      updatedState.user = usr;
      setUser(updatedState);
      if ( cb  && typeof cb === 'function' ) cb();
    };


    const signup = (usr, cb) => {
        const updatedState = { ...user };
        updatedState.authenticated = true;
        updatedState.user = usr;
        setUser(updatedState);

        if ( cb  && typeof cb === 'function' ) cb();
      };
  
    const signout = cb => {
      const updatedState = { ...user };


      Parse.User.logOut().then(() => {
        updatedState.authenticated = false;
        updatedState.user = null;
        setUser(updatedState);
      });

      if ( cb  && typeof cb === 'function' ) cb();
    };
    
  
    return {
      user,
      signin,
      signup,
      signout
    };
  }


  export {
    ProvideAuth,
    useAuth
  }