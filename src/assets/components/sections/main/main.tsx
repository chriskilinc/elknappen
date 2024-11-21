import image from "../../../images/electric-panel.png";
import ahlsell from "../../../images/ahlsell.png";
import apq from "../../../images/apq.png";
import dipart from "../../../images/dipart.png";
import elektroskandia from "../../../images/elektroskandia.png";
import solar from "../../../images/solar.png";

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
                    {/* <div className='flex gap-smallest'>
                        <button className='primary'>Våra Tjänster</button>
                        <button>Hör av dig</button>
                    </div> */}
                </div>
            </section>

            <section id="services" className='section bg-light ptb-large'>
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
                    <div className='columns mb-medium'>
                        <div className='column'>
                            <h3>Hör av dig för Prisförslag</h3>
                            <ul className='checkmark-list'>
                                <li>Kostnadsfri</li>
                                <li>Skräddarsydd</li>
                            </ul>
                        </div>
                        <div className='column'>
                            <img decoding="async"
                                src={image}
                                title="An electrical panel with an electric meter on the wall, with green plants near it"
                                alt="An electrical panel with an electric meter on the wall, with green plants near it.">
                            </img>
                        </div>
                    </div>
                </div>
            </section>

            <section id="company" className='section bg-light ptb-large'>
                <div className='container'>
                    <h2>Företaget</h2>
                    <strong><p style={{ marginBottom: 0 }}>Det här är El Knappen.
                    </p></strong>
                    <p className='mb-medium-small md-mb-medium'>Erfaren, utbildad och behörig elektriker. Både i Sverige och utomlands sedan 45 år tillbaka.</p>

                    <div className='boxes flex flex-wrap justify-center'>
                        <div className='box'>
                            <h3>Erfarenheter</h3>
                            <p>Skolor, Sjukhus, Stora köpcenter, Butiker, Restauranger, Lägenheter och Villor</p>
                        </div>
                        <div className='box'>
                            <h3>Praktikanter</h3>
                            <p>Vi har under ett flertal år tagit in praktikanter från skolor runt om i Stockholm för att ge de unga en chans i arbetslivet</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section bg-light ptb-large'>
                <div className='container'>
                    <div className='flex flex-column align-center clients p-small md-p-larger bg-lightest border-radius'>
                        <h3 className='mb-small md-mb-large'><i>Våra Sammarbeten</i></h3>
                        <div className='flex flex-wrap justify-center gap-smaller md-gap-medium' style={{ filter: "grayscale(1)" }}>
                            <img className='client-img' decoding="async"
                                src={ahlsell}
                                alt="Tourist taking photo of a building">
                            </img>
                            <img className='client-img' decoding="async"
                                src={apq}
                                alt="Tourist taking photo of a building"
                                style={{ scale: "0.75" }}>
                            </img>
                            <img className='client-img' decoding="async"
                                src={dipart}
                                alt="Tourist taking photo of a building">
                            </img>
                            <img className='client-img' decoding="async"
                                src={elektroskandia}
                                alt="Tourist taking photo of a building">
                            </img>
                            <img className='client-img' decoding="async"
                                src={solar}
                                alt="Tourist taking photo of a building"
                                style={{ scale: "0.75" }}>
                            </img>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}