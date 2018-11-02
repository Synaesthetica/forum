import * as React from 'react';
import './App.css';

interface IAppState {users: [any?]};

class App extends React.Component<{}, IAppState> {
  constructor() {
    super({});
    this.state = { users:[] };
  }

  public async componentDidMount() {
    const res = await fetch("/users");
    const users = await res.json();
    this.setState({users});
  }

  public render() {
    return (
      <div className="App">
      {this.state.users.map(user => 
        <div key={user.id}>{user.name} is friends with {user.friend}.</div>
      )}
      </div>
    );
  }
}

export default App;
