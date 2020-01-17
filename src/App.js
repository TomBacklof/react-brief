import React from "react";
import Form from "./components/Form";
const fetch = require('node-fetch');

class App extends React.Component {


  getData = async e => {
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://labs.thetrainbrain.com/knockon/?minutes=30`);
    const data = await api_call.json();
    console.log(data);
  };
  render() {
    return (
      <div>
        <Form getData={this.getData} />
        <p>TrafficTest</p>
      </div>
    );
  }
}

export default App;
