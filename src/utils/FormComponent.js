import { Component } from 'react';

export default class FormComponent extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  handleChange = e => {
    let value = e.target.value;

    if (e.target.type === 'checkbox') {
      value = (value === '0' || value === '' ? '1' : '0');
    }

    this.setState({ fields: {
      ...this.state.fields,
      [e.target.name]: value
    }});
  }
}
