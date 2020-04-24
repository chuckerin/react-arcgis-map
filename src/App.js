import React from 'react';
import ReactMap from './components/react-map/react-map';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {baseMap: 'hybrid'};
  }

  render() {
    console.log('App.render => ' + this.state.baseMap);
    return (
      <div className='full-size'>
        <input className='mapType' type='text' placeholder='hybrid' 
          onChange={e => this.setState({ baseMap: e.target.value })} />
        <ReactMap baseMap={this.state.baseMap} />
      </div>
    );
  }
}

const handleChange = (event) => {
  console.log(event.target.value);
  this.state({baseMap: event.target.value});
}

export default App;
