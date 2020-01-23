/* Packages */
import React from 'react';

const productCard = (props) => {
  return(
    <div key={ props.id }>
        <div className="uk-card uk-card-default uk-card-body">
            <h3 className="uk-card-title">{ props.title }</h3>
            <p>{ props.body }</p>
        </div>
    </div>
  );
}

export default productCard;
