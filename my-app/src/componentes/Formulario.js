import React from "react";

class Formulario extends React.Component{

//creamos los refs

categoriaRef = React.createRef();
//creamos el metodo del formulario para crear el objeto

Categoria =(e)=>{
	e.preventDefault();

	// creamos el objeto

	const categoria = {
		categoria:this.categoriaRef.current.value,
	}

	//le enviamos los datos al padre

	this.props.categoria(categoria);

}

	render(){

		return(
				
				<div className="nav-wrapper light darken-3">
				<h2 className="brand-logo center">Noticias Por Categoria </h2>

				<form onSubmit={this.Categoria} >
					<select ref={this.categoriaRef} >

					<option value="general" defaultValue>General</option>
					<option value="entertainment">Entretenimiento</option>
					<option value="business">Negocios</option>
					<option value="science">Ciencia</option>
					<option value="health">Salud</option>
					<option value="sports">Deportes</option>
					<option value="technology">Tecnologia</option>

				</select>
				<center>
				<button type="submit" className="waves-effect waves-light btn yellow accent-4">
				Buscar</button></center>
				<br/>
				</form>
				</div>
				
			);
	}
}

export default Formulario ;