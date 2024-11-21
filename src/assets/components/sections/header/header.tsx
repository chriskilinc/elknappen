export const Header = () => {
    return (
        <header className="header">
            <section className='section'>
                <div className='flex align-center justify-between p-small'>
                    <div>
                        <p className='company-title'><a href='#'>El Knappen AB</a></p>
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