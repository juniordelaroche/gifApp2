import React from 'react';

export const GifGridItem = ({id, title, url}) => {
  
  return (
    <div className="col-md-3">
      <div className='card'>
        <img className="card-img-top" alt={ title } src={ url } />
        <div className="card-body">
          <h5 className="card-title">{ title }</h5>
        </div>
      </div>
    </div>
    )

}
