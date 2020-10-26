import React, { Component } from 'react';

import styles from "./styles.module.css";
import OptionPicker from '../OptionPicker';

interface CarConfiguratorState {
  selectedEngine: string | null;
  selectedColor: string | null;
  selectedDriveWheel: string | null;
}

export default class CarConfigurator extends Component<{}, CarConfiguratorState> {
  private engines = ['Petrol', 'Diesel', 'Tesla'];
  private colors = ['Black', 'White', 'Red', 'Yellow'];
  private driveWheels = ['4X', 'Front-Wheel-Drive', 'Rear-Wheel-Drive'];

  constructor(props = {}) {
    super(props);
    this.state = {
      selectedEngine: null,
      selectedColor: null,
      selectedDriveWheel: null,
    };
  }

  render() {
    const { selectedEngine, selectedColor, selectedDriveWheel } = this.state;
    return (
      <div className={styles.carConfigurator}>
        <h5>CarConfigurator</h5>
        <div className={styles.chosenConfig}>
          <h5>Current config</h5>
          <p>Engine: {selectedEngine}</p>
          <p>Color: {selectedColor}</p>
          <p>Drive Wheel: {selectedDriveWheel}</p>
        </div>
        <div>
          <OptionPicker
            label="Choose engine type"
            options={this.engines}
            optionSelect={this.selectEngineHandler}
          />

          <OptionPicker
            label="Select color"
            options={this.colors}
            optionSelect={this.selectColorHandler}
          />

          <OptionPicker
            label="Which one?"
            options={this.driveWheels}
            optionSelect={this.selectDriveWheelsHandler}
          />

        </div>
      </div>
    );
  }

  private selectEngineHandler = (engine: string) => {
    this.setState({
      selectedEngine: engine
    });
  };

  private selectColorHandler = (color: string) => {
    this.setState({
      selectedColor: color
    });
  };

  private selectDriveWheelsHandler = (driveWheel: string) => {
    this.setState({
      selectedDriveWheel: driveWheel
    });
  };

}
