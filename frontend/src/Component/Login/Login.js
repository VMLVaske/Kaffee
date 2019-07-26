import React from 'react';
import './Style.css';

import Snacks from './../Snacks/Snacks';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      m_id: null
    };

    // This binding is necessary to make 'this' work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  _renderSubComp() {
    switch(this.state.render) {
      case 'snacks': return <Snacks/>
      default: return null
    }
  }

  render() {
    return (
      <div>
        Bitte Unique Identifier eingeben:
        <form onSubmit={this.handleSubmit}>
          <label>
            M_ID (z.B. 1177):
            <input type="text" name="name" value={this.state.m_id} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>Value: {this.state.value}</p>
        <br/>
        <p>Name: {this.state.name} </p>
      </div>) ;
  }
}

export default Login;
