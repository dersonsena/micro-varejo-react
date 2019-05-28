import React, { Component } from 'react';

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() {
    return (
      <div>
        <h1>MAIN Layout</h1>
        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;
