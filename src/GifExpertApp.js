import React, {useState} from "react";
import {AddCategory} from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";

const GifExpertApp = () => {
  
  const [categorias, setCategorias] = useState(["Attack on Titan"]);

	return (
		<div className="container">
			<h1>GifExpertApp</h1>
			<AddCategory setCategorias={ setCategorias } />
			<hr />
			<div  className="contenedor-categorias">
        {
          categorias.map((categoria) => (
            <GifGrid  
              key={ categoria }
              categoria={ categoria }
            />
          ))
        }
			</div>
		</div>
	);
};

export default GifExpertApp;