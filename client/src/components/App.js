import React, { Component } from 'react';


class App extends Component {
  state = { users: []};

  componentDidMount() {
    fetch('/api/users')
    .then(res => res.json())
    .then(users => {
      console.log(users);
      users = users.data
      this.setState({ users });
    })
  }

  render() {
    return (
      <div className=''>
        <h1> users</h1>
        {this.state.users.map(user =>
         <div key={user.id}>{user.username}</div>
         )}
      </div>
    );
  }
}

export default App;
