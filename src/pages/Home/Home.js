import React from 'react';
import './Home.css';

export class Home extends React.Component {
	render() {
		return (
			<section id='home' className='container'>
				<h2>Behöriga Elektriker i Stockholm.</h2>
				<div>
					<button type="button" className="primary" onClick={() => this.props.changePage("contact")}>Hör av dig</button>
				</div>
			</section>
		);
	}
}
