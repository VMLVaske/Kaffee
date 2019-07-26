import React from 'react';
import axios from 'axios';

class Restful extends React.Component {

  state = {
    m_id: null,
    email: null
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {

        //create an array of contacts only with relevant data
        const newContacts = response.data.map(c => {
          return {
            id: c.id,
            name: c.name
          };
        });

        // create a new state object without mutating
        // the original state object
        const newState = Object.assign({}, this.state, {
          contacts: newContacts
        });

        // store the new state object in the components
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="Restful">
        //... html code
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }

}

export default Restful;
