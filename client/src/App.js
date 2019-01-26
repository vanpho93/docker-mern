import React, { Component } from 'react';
import * as axios from 'axios';

const API_ENDPOINT = 'http://localhost:3000';

class App extends Component {
  state = { users: [], loading: true, name: '', email: '', avatar: '' }

  componentDidMount = async () => {
    const response = await axios.get(API_ENDPOINT + '/user');
    this.setState({ loading: false, users: response.data.result });
  }

  addUser = async () => {
    const { name, email, avatar, users } = this.state;
    const response = await axios.post(API_ENDPOINT + '/user', { name, email, avatar });
    this.setState({ users: users.concat(response.data.result) });
  } 

  render() {
    const { loading, users, name, email, avatar } = this.state;
    if (loading) return <p>Loading...</p>;
    return (
      <div>
        <div>
            <h3>Add user</h3>
            <input value={name} placeholder="name" onChange={evt => this.setState({ name: evt.target.value })} />
            <input value={email} placeholder="email" onChange={evt => this.setState({ email: evt.target.value })} />
            <input value={avatar} placeholder="avatar" onChange={evt => this.setState({ avatar: evt.target.value })} />
            <button onClick={this.addUser}>Add</button>
          </div>
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
