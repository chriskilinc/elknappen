import logo from '../../../images/logo.webp';

export const Header = () => {
    return (
        <header className="header">
            <section className='section'>
                <div className='flex align-center justify-between p-small'>
                    <div>
                        <a href='#'><img title='Elknappen Ab' alt='Elknappen Ab Logo' style={{ height: "60px", background: "none" }} src={logo}></img></a>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#services">Tjänster</a></li>
                            <li><a href="#company">Företaget</a></li>
                            <li><a href="#contact">Kontakt</a></li>
                        </ul>
                    </nav>
                </div>
            </section>
        </header>
    );
}