import React, { Component } from 'react';
import { render} from 'react-dom';

import Home from './components/Home';



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
