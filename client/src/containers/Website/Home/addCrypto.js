import React,{useState, useEffect }  from 'react';
import { useParse } from '../../../components/context/parse-context';
import { useAuth } from '../../../components/context/auth-context';
import Parse from 'parse';
const AddCrypto =(props) =>{

    const tableName = "Recomendations"
    const parseService = useParse();
    const usr = Parse.User.current();
    const [ crypto, setCrypto] = useState({
        name: '',
        description : ''
        });

  
    const onChangeInput = (event) => {
        const target = event.target,
                updatedState = { ...crypto };
        
        updatedState[target.name] = target.value;
        setCrypto(updatedState);
    }
        


  const add = async () => {
    if (!crypto.name && !crypto.description ){
        alert('bro wtf? add some values!')
        return
    }
    const addedElement = await parseService.addItem(tableName, crypto,usr);
    if ( props.cb ) props.cb(addedElement)
   }
   return (
   <form>
    <fieldset className="uk-fieldset">
      
        <legend className="uk-legend">Recomend a crypto</legend>

        <div className="uk-margin">
            <input className="uk-input" onChange={ (e) => { onChangeInput(e) }} name="name" type="text" placeholder="Name"/>
        </div>

        <div className="uk-margin">
            <textarea className="uk-textarea" onChange={ (e) => { onChangeInput(e) }} name="description" rows="5" placeholder="Why"></textarea>
        </div>

        <button onClick= {add}  className="uk-button uk-button-primary" type="button">recommend</button>
    </fieldset>
</form>
) 
}

export default AddCrypto