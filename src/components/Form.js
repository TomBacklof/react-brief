import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getData}>
        <input type="text" name="Från" placeholder="Från..." />
        <input type="text" name="Till" placeholder="Till..." />
        <button>Get Data!</button>
      </form>
    );
  }
}

export default Form;
