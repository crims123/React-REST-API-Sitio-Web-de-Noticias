import React from "react";
import ReactTransitionGroup from "react-transition-group";  // importar las animaciones de react
class Noticia extends React.Component{



	render(){
// creaos un objeto destructor para separa el contenido dle objeto recibido de la api
	const {author,content,description,source,title,url,urlToImage} =this.props.noticia;
	//console.log(content);


		return(
				
	<div className="col s12 m6 l4">
	<div className="card">
		<div className="card-image">
			<img src={urlToImage}/>
		</div>

		<div className="card-content">
			<h3>{title}</h3>
			<p>{description}</p>

		</div>

		<div className="card-action">
			<a target="_blank" href={url} className="waves-effects waves-light btn" >
				
				Noticia Completa
			</a>


		</div>
		
	</div></div>




				
			);
	}
	}


export default Noticia;