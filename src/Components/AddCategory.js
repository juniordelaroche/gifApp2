import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategorias }) => {

  const [inputValue, setInputValue] = useState('');
  
  // Manejador del cambio de valor en el input
  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    // Prevenir el refresh
    e.preventDefault();

    if( inputValue.trim().length > 2 ) {
      setCategorias(c => [inputValue,...c]);
      setInputValue('');
    } else {
      alert('Ops que pena pero debe ingresar un valor');
    }

  }

	return (
		<form className="row" onSubmit={ handleSubmit }>
			<div className="input-group col-md-6 mb-3">
				<input
					type="text"
          className="form-control"
          placeholder="Agregue una categoria"
					value={ inputValue }
					onChange={ handleInputChange }
				/>
				<button className="btn btn-outline-primary" type="submit" id="button-addon1">
					Agregar
				</button>
			</div>
		</form>
	)
}

AddCategory.propTypes = {
  setCategorias: PropTypes.func.isRequired
}
