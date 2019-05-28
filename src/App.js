import React from 'react';
import AppFormField from '~/components/app/AppFormField';

function App() {
  return (
    <div className="App">
      <AppFormField
        label="Your Fist Name"
        name="name"
        placeholder="Type your name..."
        required={true}
        onChange={e => this.handleChange(e)} />
    </div>
  );
}

export default App;
