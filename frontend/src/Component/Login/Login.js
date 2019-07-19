import React from 'react';
import './Style.css';

import Snacks from './../Snacks/Snacks';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };

    // This binding is necessary to make 'this' work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(compName, e) {
    this.setState({render:compName});
  }

  _renderSubComp() {
    switch(this.state.render) {
      case 'snacks': return <Snacks/>
    }
  }

  render() {
    return <div>
      Bitte den Mitarbeiterausweis vor den NFC Reader halten.
    </div>;
  }
}

export default Login;
