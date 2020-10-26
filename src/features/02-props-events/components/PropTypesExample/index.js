import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from "./styles.module.css";

class Person {
  getName() {
  }
}

export default class PropTypesExample extends Component {
  static propTypes = {

    // JS primitives/built-ins
    optionalArray: PropTypes.array,
    optionalBool: PropTypes.bool,
    optionalFunc: PropTypes.func,
    optionalNumber: PropTypes.number,
    optionalObject: PropTypes.object,
    optionalString: PropTypes.string,
    optionalSymbol: PropTypes.symbol,

    // Anything that can be rendered: numbers, strings, elements or an array
    // (or fragment) containing these types.
    optionalNode: PropTypes.node,

    // A React element.
    optionalElement: PropTypes.element,

    // instance of specific class
    optionalInstance: PropTypes.instanceOf(Person),

    // enum with specific values
    optionalEnum: PropTypes.oneOf(['News', 'Photos']),

    // An object that could be one of many types
    optionalUnion: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Person)
    ]),

    // An array of a certain type
    optionalArrayOf: PropTypes.arrayOf(Person),

    // An object with property values of a certain type
    optionalObjectOf: PropTypes.objectOf(PropTypes.number),

    // An object taking on a particular shape
    optionalObjectWithShape: PropTypes.shape({
      color: PropTypes.string,
      fontSize: PropTypes.number
    }),

    // required function
    requiredFunc: PropTypes.func.isRequired,

    // required any type
    requiredAny: PropTypes.any.isRequired
  };

  render() {
    const { requiredFunc, requiredAny } = this.props;

    return (
      <div className={styles.propTypesExample}>
        <h3>PropTypesExample</h3>
        <div>
          <p>
            Value: {requiredAny}
          </p>
        </div>
        <div>
          <button onClick={requiredFunc}>Test</button>
        </div>
      </div>
    );
  }

}
