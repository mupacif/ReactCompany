/* Packages */
import React,{useEffect} from 'react';
import Parse from 'parse';


const CryptoCard = (props) => {
  const usr = Parse.User.current();

  return(
    (<div key={ props.crypto.id }>
        <div className="uk-card uk-card-default uk-card-body">
            <h3 className="uk-card-title">{ props.crypto.name } 
            
            {usr && props.crypto.user.id == usr.id &&
              <span className="uk-margin-small-right" onClick={props.cb} uk-icon="trash"></span>}
            </h3>
            <p>{ props.crypto.description }</p>
        </div>
    </div>)
  );
}

export default CryptoCard;
