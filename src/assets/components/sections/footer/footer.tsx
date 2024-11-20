export const Footer = () => {
    return (
        <footer className="footer">
            <section className='section bg-darker'>
                <div className='flex flex-column md-flex-row justify-between ptb-medium md-ptb-large'>
                    <div>
                        <h3><a href='#' className='title color-red'>El Knappen Ab</a></h3>
                        <p>Hör av dig!</p>
                        <p style={{ margin: 0 }}>Balettvägen 53</p>
                        <p style={{ margin: 0 }}>142 64 Trångsund</p>
                        <p style={{ margin: 0 }}>Org.nr: 559140-1269</p>
                    </div>
                    <div>
                        <h4>Kontaktuppgifter</h4>
                        <a href='mailto:elknappen@gmail.com'>elknappen@gmail.com</a>
                        <p>+46 73 434 62 54</p>
                    </div>
                </div>
            </section>
        </footer>
    );
}