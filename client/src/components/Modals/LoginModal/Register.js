/* Packages */
import React, {useState} from 'react';
import Parse from 'parse';
import { useAuth } from '../../context/auth-context';
import UIkit from '../../../../node_modules/uikit/dist/js/uikit.js';
import { useParse } from '../../context/parse-context'
const LoginModal = (props) => {

  let auth = useAuth();
  const parseService = useParse().getParse();
  const [ user, setUser ] = useState({
    username: {
      value: '',
      error: {
        status: false,
        msg: ''
      }
    },
    email: {
      value: '',
      error: {
        status: false,
        msg: ''
      }
    },
    password: {
      value: '',
      error: {
        status: false,
        msg: ''
      }
    },
    response: {
      error: {
        status: '',
        msg: ''
      }
    }
  });

  
  const onChangeInput = (event) => {
    const target = event.target,
          updatedState = { ...user };
    
    updatedState[target.name].value = target.value;
    setUser(updatedState);
  }

  const signUpUser = () => {
    if (!user.username.value) setError('username', true ,'The field needs to be filled in');
    else setError('username', false, '');

    if (!user.email.value) setError('email', true ,'The field needs to be filled in');
    else setError('email', false, '');

    if (!user.password.value) setError('password', true ,'The field needs to be filled in');
    else setError('password', false, '');

    if (
      !user.username.error.status 
      && !user.email.error.status 
      && !user.password.error.status
      ) {
        const data = {
          username: user.username.value,
          email: user.email.value,
          password: user.password.value
        };

        const u = new Parse.User();
        u.set('username', data.username);
        u.set('password', data.password);
        u.set('email', data.email);

        u.signUp()
        .then((usr)=>{
          auth.signup(usr, (e) => {
            UIkit.modal('#register-modal').hide();
          });
        }).catch((err)=>{
          return setError('response', true, err.message);
        })
  
    
    }
    
  }


  const setError = (name, status, msg) => {
    const updatedState = { ...user };
    updatedState[name].error.msg = msg;
    updatedState[name].error.status = status;

    setUser(updatedState);
  }




  return(
      <div id="register-modal" data-uk-modal>
        <div className="uk-modal-dialog">
            <button className="uk-modal-close-default" type="button" data-uk-close></button>
        
            <div className="uk-modal-header">
              <h2>Log in</h2>
            </div>

            <div className="uk-modal-body">
              <form>
                <div className="uk-margin">
                  <label>Username</label>
                  <input className="uk-input" type="text" name="username"  onChange={ (e) => { onChangeInput(e) }} />
                  { user.username.error.status ? <p style={{ color: 'red'}}>{ user.username.error.msg}</p> : '' }
                </div>
                <div className="uk-margin">
                  <label>email</label>
                  <input className="uk-input" type="text" name="email"  onChange={ (e) => { onChangeInput(e) }} />
                  { user.email.error.status ? <p style={{ color: 'red'}}>{ user.email.error.msg}</p> : '' }
                </div>
                <div className="uk-margin">
                  <label>Password</label>
                  <input className="uk-input" type="password" name="password" onChange={ (e) => { onChangeInput(e) }} />
                  { user.password.error.status ? <p style={{ color: 'red'}}>{ user.password.error.msg}</p> : '' }
                </div>
              </form>
            </div>

            <div className="uk-modal-footer uk-text-right">
              <button  onClick={()=> { signUpUser()}} className="uk-button uk-button-primary" type="button">Save</button>
              { user.response.error.status ? <p style={{ color: 'red'}}>{ user.response.error.msg}</p> : '' }
            </div>
        </div>
      </div>

  );
}

export default LoginModal;
