import React from 'react';
import axios from 'axios'
import PlayerList from './components/PlayerList';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      players: []
    }
  }
  componentDidMount(){
    axios.get('http://localhost:5000/api/players')
    .then(res => {
      console.table(res.data)
      this.setState({
        players: res.data
      })
    })
  }
  render(){
    return (
      <div className='app'>
        <PlayerList players={this.state.players}/>
      </div>
    )
  }
}

export default App;
