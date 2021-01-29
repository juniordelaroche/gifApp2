import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from '../Components/GifGridItem'

const GifGrid = ({ categoria }) => {

  const {data:imagenes, loading} = useFetchGifs(categoria); //HOOK

  return (
    <>
      { loading && <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div> }
      <div className="row row-cards animate__animated animate__backInLeft" >
        <h3 className="fw-bold">{ categoria }</h3>
          {
            imagenes.map( img => 
            <GifGridItem key={img.id} {...img} />
            )
          }
      </div>
    </>
  )
}

export default GifGrid
