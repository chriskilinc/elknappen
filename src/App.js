import React, { useState } from 'react';
import './App.css';
import { Home, About, Contact } from './pages';

function App() {
	const [pageId, setPageId] = useState('home');
	const [loading, setLoading] = useState(false);

	const initLoading = () => {
		console.log('loading');
		setLoading(true);
		setInterval(() => {
			setLoading(false);
		}, 2000);
	};

	const changePage = (pageId) => {
		setPageId(pageId);
	};

	const pages = new Map([
		['home', <Home load={initLoading} changePage={changePage} />],
		// ['homeOld', <HomePage load={initLoading} />],
		['about', <About />],
		['contact', <Contact />],
	]);



	return (
		<div className='app'>
			<section id='loading-page' className={loading ? 'loading' : 'loaded'}>
				{/* <p>loadingPage</p> */}
			</section>
			{/* Current Page */}
			<header>
				<div className='item'>
					<h1 className='link' onClick={() => changePage('home')}>
						El Knappen AB
					</h1>
				</div>
				<div className='item'>
					<nav>
						<a
							href='#'
							className='uppercase'
							onClick={() => changePage('home')}>
							Hem
						</a>
						<a
							href='#'
							className='uppercase'
							onClick={() => changePage('about')}>
							Företaget
						</a>
						<a
							href='#'
							className='uppercase'
							onClick={() => changePage('contact')}>
							Kontakt
						</a>
					</nav>
				</div>
			</header>
			<main>{pages.get(pageId) || pages.get('home')}</main>
		</div>
	);
}

export default App;
