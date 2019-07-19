import React from 'react';
import './Style.css';

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //alert('A submission was made! ' + this.state.value);
    event.preventDefault();
  }



  render() {
    return (
      <div className="registerData">
        <h2>Bitte deine Daten geben brudi</h2>

        <p>Bitte deine Karte vorhalten - ich versuche, sie auszulesen!
        </p>

        <form onSubmit={this.handleSubmit}>
          <label>
            Emailadresse:
            <input type="text" name="name" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>Value: {this.state.value}</p>
      </div>


    );
  }
}

export default Register;
