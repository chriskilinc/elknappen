export const Main = () => {
    return (
        <main className="main">
            <section className='section bg-light ptb-large'>
                <div className='container'>
                    <div>
                        <strong className='color-red'>El Knappen Ab</strong>
                        <h1>Behörig Elektriker i Stockholm</h1>
                        <p style={{ margin: 0 }}>Hör av dig så hjälper vi dig!</p>
                        <p>+46 736 64 72 93</p>
                    </div>
                    <div className='flex gap-smallest'>
                        <button className='primary'>Våra Tjänster</button>
                        <button>Hör av dig</button>
                    </div>
                </div>
            </section>

            <section className='section bg-light ptb-large'>
                <div className='container'>
                    <h2>Tjänster</h2>
                    <p className='paragraph-tight mb-medium-small md-mb-medium'>
                        Vi hjälper dig eller ditt företag med all sorters elarbeten. Stora som små.
                        <br />
                        Allt från Installationer till Reparationer, Smarta Hem, Styrning av belysning, maskiner, säkerhet samt Felsökningar, Fiber, Larm och Nätverk.
                    </p>
                    <div className='boxes flex flex-wrap justify-center'>
                        <div className='box'>
                            <h3>Nätverk och Fiber
                            </h3>
                            <p>Vi hjälper dig med installation av eluttag, belysning, maskiner och mycket mer.</p>
                        </div>
                        <div className='box'>
                            <h3>Reparationer</h3>
                            <p>Installation samt service av nytt och gammalt. Kabeldragning, Uppkopplingar samt Förlängning</p>
                        </div>
                        <div className='box'>
                            <h3>Larm</h3>
                            <p>Vi utför projektering och installationer av säkerhetslösningar</p>
                        </div>
                        <div className="box">
                            <h3>Felsökning och Service</h3>
                            <p>Kompletta felsökningar och Reparationer</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section bg-light ptb-large'>
                <div className='container'>
                    <div className='flex justify-center ptb-medium'>
                        <h2>Hör av dig för Prisförslag</h2>
                    </div>
                    <div className='columns mb-medium'>
                        <div className='column'>
                            <h3>Hör av dig för Prisförslag</h3>
                            <ul className='checkmark-list'>
                                <li>test</li>
                                <li>test</li>
                                <li>test</li>
                            </ul>
                        </div>
                        <div className='column'>
                            <img decoding="async"
                                src="http://2024.wordpress.net/wp-content/themes/twentytwentyfour/assets/images/tourist-and-building.webp"
                                alt="Tourist taking photo of a building">
                            </img>
                        </div>
                    </div>
                    <div className='columns'>
                        <div className='column'>
                            <img decoding="async"
                                src="http://2024.wordpress.net/wp-content/themes/twentytwentyfour/assets/images/tourist-and-building.webp"
                                alt="Tourist taking photo of a building">
                            </img>
                        </div>
                        <div className='column'>
                            <h3>Hör av dig för Prisförslag</h3>
                            <ul className='checkmark-list'>
                                <li>test</li>
                                <li>test</li>
                                <li>test</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}