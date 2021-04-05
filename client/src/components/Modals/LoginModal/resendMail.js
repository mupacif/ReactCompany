/* Packages */
import React, {useState} from 'react';

const ResendMailConfirmModal = (props) => {


  const [ user, setUser ] = useState({

    email: {
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

  const resendMail = () => {

    if (!user.email.value) setError('email', true ,'The field needs to be filled in');
    else setError('email', false, '');



    if ( !user.email.error.status   ) {
        const data = {
          email: user.email.value
        };

       console.log('ok')
    
    }
    
  }


  const setError = (name, status, msg) => {
    const updatedState = { ...user };
    updatedState[name].error.msg = msg;
    updatedState[name].error.status = status;

    setUser(updatedState);
  }




  return(
      <div id="resendmail-modal" data-uk-modal>
        <div className="uk-modal-dialog">
            <button className="uk-modal-close-default" type="button" data-uk-close></button>
        
            <div className="uk-modal-header">
              <h2>Resend confirmation email</h2>
            </div>

            <div className="uk-modal-body">
              <form>
                <div className="uk-margin">
                  <label>email</label>
                  <input className="uk-input" type="text" name="email"  onChange={ (e) => { onChangeInput(e) }} />
                  { user.email.error.status ? <p style={{ color: 'red'}}>{ user.email.error.msg}</p> : '' }
                </div>

              </form>
            </div>

            <div className="uk-modal-footer uk-text-right">
              <button  onClick={()=> { resendMail()}} className="uk-button uk-button-primary" type="button">Save</button>
              { user.response.error.status ? <p style={{ color: 'red'}}>{ user.response.error.msg}</p> : '' }
            </div>
        </div>
      </div>

  );
}

export default ResendMailConfirmModal;
