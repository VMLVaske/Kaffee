import React from 'react';
import logo from './logo.svg';
import './Style.css';

import Login from './../Login/Login';
import Register from './../Register/Register';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      isRegistered: false
    };

    // This binding is necessary to make 'this' work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(compName, e) {
    this.setState({render:compName});
  }

  _renderSubComp() {
    switch(this.state.render) {
      case 'login': return <Login/>
      case 'register': return <Register/>
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h2> Willkommen in der digitalen Kaffeekasse" </h2>

          <div className="ButtonContainer">
            <button className="LoginButton" onClick={this.handleClick.bind(this, 'login')} block>
              Einloggen
            </button>
            <button className="RegisterButton" onClick={this.handleClick.bind(this, 'register')} block>
              Registrieren
            </button>
            {this._renderSubComp()}
          </div>
        </header>


        <footer className="App-footer">
        A student project by Felix & Valerie.
        </footer>
      </div>

    );
  }
}
export default App;
