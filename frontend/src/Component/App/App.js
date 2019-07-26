import React from 'react';
import logo from './logo.svg';
import './Style.css';

import Login from './../Login/Login';
import Register from './../Register/Register';
import Snacks from './../Snacks/Snacks';

// JSON Experimente
// import GetOnlinePosts from './../OnlinePosts/GetOnlinePosts';
// import GetLocalPosts from './../LocalPosts/GetLocalPosts';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
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
      default: return null;
    }
  }

  isInJSON() {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  }

  render() {

    return(
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2> Willkommen im Snack-Land </h2>
          </header>
          <navbar className="App-navbar">
            <div className="ButtonContainer">
              <button className="LoginButton" onClick={this.handleClick.bind(this, 'login')}>
                Einloggen
              </button>
              <button className="RegisterButton" onClick={this.handleClick.bind(this, 'register')}>
                Registrieren
              </button>
              {/*
                <button className="ShowInternalJson" onClick={this.handleClick.bind(this, 'ShowInternalJson')}>
                Show Internal JSON
              </button>
              */}
              {/*
              <button className="ShowExternalJson" onClick={this.handleClick.bind(this, 'ShowExternalJson')}>
                Show External JSON
              </button>
              */}
              {this._renderSubComp()}
              </div>
          </navbar>
          <body className="App-body">
          </body>
          <footer className="App-footer">
          A student project by Felix & Valerie.
          </footer>
        </div>
    );
  }
}
export default App;
