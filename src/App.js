import React from 'react';
import {ReactMap} from './components/react-map/react-map';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {baseMap: 'hybrid'};
  }

  render() {
    return (
      <div className='full-size'>
        <input type='text' placeholder='hybrid' onChange={handleChange} />
        <ReactMap baseMap={this.state.baseMap} />
      </div>
    );
  }
}

const handleChange = (event) => {
  this.state({baseMap: event.target.baseMap});
}

export default App;
