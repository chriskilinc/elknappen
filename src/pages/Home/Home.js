import React from 'react';
import './Home.css';

export class Home extends React.Component {
	render() {
		return (
			<section id='home' className='container'>
				<h2>Behöriga Elektriker i Stockholm.</h2>
				<div>
					<button type="button" className="primary margin-right-m" onClick={() => this.props.changePage("about")}>Våra Tjänster</button>
					<button type="button" className="secondary" onClick={() => this.props.changePage("contact")}>Hör av dig</button>
				</div>
			</section>
		);
	}
}
