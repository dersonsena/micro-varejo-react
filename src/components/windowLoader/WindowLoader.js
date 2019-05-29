import React from 'react';
import PropTypes from 'prop-types';
import './spinkit.css';
import './custom.css';

const propTypes = {
  text: PropTypes.string,
  show: PropTypes.bool
};

const defaultProps = {
  text: 'Carregando, por favor, aguarde...',
  show: false
};

const WindowLoader = props => {
  if (!props.show) {
    return null;
  }

  return (
    <div>
      <div className="sk-cube-grid sk-primary">
        <div className="sk-cube sk-cube1"></div>
        <div className="sk-cube sk-cube2"></div>
        <div className="sk-cube sk-cube3"></div>
        <div className="sk-cube sk-cube4"></div>
        <div className="sk-cube sk-cube5"></div>
        <div className="sk-cube sk-cube6"></div>
        <div className="sk-cube sk-cube7"></div>
        <div className="sk-cube sk-cube8"></div>
        <div className="sk-cube sk-cube9"></div>
      </div>
      <h5 className="text-center mb-0">{props.text}</h5>
    </div>
  )
};

WindowLoader.propTypes = propTypes;
WindowLoader.defaultProps = defaultProps;

export default WindowLoader;
