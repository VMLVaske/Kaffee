import React from 'react';
import './Style.css';

class GetSnacks extends React.Component {

  componentDidMount() {
    var url = "https://jsonplaceholder.typicode.com/posts"
    fetch({url})
    .then( response => response.json() )
    .then(
      //handle the result
      (result) => {
        this.setState({
          isLoaded: true,
          posts: result
        });
      },

      // Handle Error
      (error) => {
        this.setState({
          isLoaded: true,
          error
        })
      },
    )
  }
  render() {
    const {error, isLoaded, posts} = this.state;
    if(error) {
      return <div>Error in Loading </div>
    } else if(!isLoaded) {
      return <div>Loading...</div>
    } else {
      return(
        <div>
          <ol>
          {
            posts.map(post=> (
              <li key={post.id} align="start">
                <div>
                  <p>{post.title}</p>
                  <p>{post.body}</p>
                </div>
              </li>
            ))
          }
          </ol>
        </div>
      );
    }
  }
}

export default GetSnacks;
