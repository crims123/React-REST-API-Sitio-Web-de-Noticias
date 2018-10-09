import React from "react";
import Noticia from "./Noticia";
//import {TransitionGroup, CSSTransition} from "react-transition-group";  // importar las animaciones de react
class Noticias extends React.Component{

	render(){

		return(
			
				<div className="row" >
				
					{this.props.noticias.map(noticia=>(
							
							
				

									<Noticia
									key={noticia.url}
									noticia={noticia}
									/>
						
						))}
					
				
				</div>
				
			)
	}
}

export default Noticias;