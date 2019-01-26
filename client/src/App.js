import React, { Component } from 'react';
import * as axios from 'axios';

class App extends Component {
  state = { users: [], loading: true }
  componentDidMount = async () => {
    const API_ENDPOINT = 'http://localhost:3000';
    const response = await axios.get(API_ENDPOINT + '/user');
    this.setState({ loading: false, users: response.data.result })
  }

  render() {
    const { loading, users } = this.state;
    if (loading) return <p>Loading...</p>;
    return (
      <div>
        {users.map(user => (
          <div key={user._id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <img src={user.avatar} alt={user.avatar} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
