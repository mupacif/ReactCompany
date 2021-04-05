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

  const signInUser = () => {
    if (!user.username.value) setError('username', true ,'The field needs to be filled in');
    else setError('username', false, '');

    if (!user.password.value) setError('password', true ,'The field needs to be filled in');
    else setError('password', false, '');


    if (!user.username.error.status && !user.password.error.status) {
      const data = {
        username: user.username.value,
        password: user.password.value
      };

      parseService.User.logIn(data.username, data.password).then(
        (user)=>{
          auth.signin(user, () => {
            UIkit.modal('#login-modal').hide();
          });
        }
      ).catch(err => {
        let msg = err.message;

        return setError('response', true, msg, err.code);
      })    
    }
  }


  const setError = (name, status, msg, code) => {
    const updatedState = { ...user };
    updatedState[name].error.msg = msg;
    updatedState[name].error.status = status;
    updatedState[name].error.code = code;
    setUser(updatedState);
  }




  return(
      <div id="login-modal" data-uk-modal>
        <div className="uk-modal-dialog">
            <button className="uk-modal-close-default" type="button" data-uk-close></button>
        
            <div className="uk-modal-header">
              <h2>Log in</h2>
            </div>

            <div className="uk-modal-body">
              <form>
                <div className="uk-margin">
                  <label>Username</label>
                  <input className="uk-input" type="text" name="username" onChange={ (e) => { onChangeInput(e) }} />
                  { user.username.error.status ? <p style={{ color: 'red'}}>{ user.username.error.msg}</p> : '' }
                </div>
                <div className="uk-margin">
                  <label>Password</label>
                  <input className="uk-input" type="password" name="password" onChange={ (e) => { onChangeInput(e) }} />
                  { user.password.error.status ? <p style={{ color: 'red'}}>{ user.password.error.msg}</p> : '' }
                </div>
              </form>
              <div className="uk-margin">
                  <a data-uk-toggle="target: #resetpwd-modal">forgotten password</a>
               </div>
            </div>
    
        
            <div className="uk-modal-footer uk-text-right">
              <button  onClick={()=> { signInUser()}} className="uk-button uk-button-primary" type="button">Log in</button>
              { user.response.error.status ? <p style={{ color: 'red'}}>{ user.response.error.msg}</p> : '' }
              { user.response.error.code === 205 && <a data-uk-toggle="target: #resendmail-modal">Resend onfirmation mail.</a> }
            </div>


        </div>
      </div>

  );
}

export default LoginModal;
