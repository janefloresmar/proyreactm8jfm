import React, {useState} from 'react';
import styled from 'styled-components';
import Modal from './components/Modal';

const App = () => {

	const [estadoModal1, cambiarEstadoModal1] = useState(false);
	return (
		<div>
			<ContenedorBotones>
				<Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>ÁBREME</Boton>
			</ContenedorBotones>
			<Modal estado={estadoModal1}
			cambiarEstado={cambiarEstadoModal1}>
				<Contenido><h1>Modulo 7 diplomado Full Stack</h1>
				<p>Jeaneth Flores Mariño</p>
				<Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>Aceptar</Boton></Contenido>
				
				</Modal>
		</div>
	);
}
 
export default App;

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

	&:hover {
		background: #0066FF;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
		text-aling: center;
	}

	p {
		font-size: 18px;
		margin-bottom: 20px;
	}

	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;