import React from 'react';
import lightBulb from '../../icons/lightbulb.svg';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      light: true
    };
    console.log('construc');
  }

  toggleLight = to => {
    this.setState({ light: to });
  };

  componentDidMount() {
    this.props.load();
  }

  componentWillUnmount() {
    console.log('willM');
  }

  render() {
    console.log('render');

    return (
      <section
        id='home'
        className={'full-height ' + (this.state.light ? 'lit' : 'dark')}
      >
        <h1 className='title'>El Knappen AB</h1>
        {/* Nav needs to move out? */}
        <nav>
          <div className='nav-item'>
            <a href='#f' className='hoverable'>
              Företaget
            </a>
          </div>
          <div className='nav-item'>
            <a
              href='#l'
              className='button-icon'
              onClick={() => this.toggleLight(!this.state.light)}
            >
              <img alt='light bulb' className='icon' src={lightBulb} />
            </a>
          </div>
          <div className='nav-item'>
            <a href='#c' className='hoverable'>
              Kontakt
            </a>
          </div>
        </nav>
        <div className='paragraph'>
          <p>
            Stockholm baserad Elinstallationsfirma bedrivet av Hayrettin Kilinc.
          </p>
        </div>
      </section>
    );
  }
}
