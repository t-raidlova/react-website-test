import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
	.jumbo {
		color: #efefef;
		background-color: black;
		opacity: 0.7;
		height: 30vh;
	}
`;

export const Jumbotron = () => (
	<Styles>
		<Jumbo fluid className="jumbo">
			<Container>
				<h1>Welcome</h1>
			</Container>
		</Jumbo>
	</Styles>
);
