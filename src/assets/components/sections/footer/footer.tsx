export const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <section className='section bg-darker'>
                <div className='container flex flex-column md-flex-row justify-between ptb-medium md-ptb-larger gap-medium'>
                    <div>
                        <h3><a href='#' className='title color-red'>El Knappen Ab</a></h3>
                        <p style={{ margin: 0 }}>Balettvägen 53</p>
                        <p style={{ margin: 0 }}>142 64 Trångsund</p>
                        <p className='' style={{ margin: 0 }}><i>Org.nr: 559140-1269</i></p>
                    </div>
                    <div>
                        <h4>Kontaktuppgifter</h4>
                        <p className='' style={{ margin: 0 }}>Hör av dig!</p>
                        <a className='color-red hover-light' href='mailto:elknappen@gmail.com'>elknappen@gmail.com</a>
                        <p>+46 73 434 62 54</p>
                    </div>
                </div>
            </section>
        </footer>
    );
}