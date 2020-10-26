import React, { Component } from 'react';

import styles from "./styles.module.css";
import OptionPicker from '../OptionPicker';

interface CarConfiguratorState {
  selectedEngine: string | null;
  selectedColor: string | null;
  selectedDriveWheel: string | null;
}

//TODO
// const initialState = {
//   selectedEngine: null,
//   selectedColor: null,
//   selectedDriveWheel: null,
// };

export default class CarConfigurator extends Component {
  private engines = ['Petrol', 'Diesel', 'Tesla'];
  private colors = ['Black', 'White', 'Red', 'Yellow'];
  private driveWheels = ['4X', 'Front-Wheel-Drive', 'Rear-Wheel-Drive'];

  constructor(props: {}) {
    super(props);
    // TODO
  }

  render() {
    // TODO
    return (
      <div className={styles.carConfigurator}>
        <h5>CarConfigurator</h5>
        <div className={styles.chosenConfig}>
          <h5>Current config</h5>
          <p>Engine: TODO_PLACEHOLDER</p>
          <p>Color: TODO_PLACEHOLDER</p>
          <p>Drive Wheel: TODO_PLACEHOLDER</p>
        </div>
        <div>
          <OptionPicker
          // label="Choose engine type"
          />

          <OptionPicker
          // label="Select color"
          />

          <OptionPicker
          // label="Which one?"
          />

        </div>
      </div>
    );
  }

  // TODO: handle optionSelect event(s)
}
