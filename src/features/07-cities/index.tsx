import React from 'react';

import GMap from '../../components/GMap';

interface City {
  name: string;
  lat: number;
  lng: number;
}

interface CitiesState {
  selectedCity: City | null;
  cities: City[];
}

export default class Cities extends React.Component<{}, CitiesState> {
  constructor(props = {}) {
    super(props);
    this.state = {
      selectedCity: null,
      cities: []
    };
  }

  render() {
    const { selectedCity, cities } = this.state;
    return (
      <div>
        <h3>Cities</h3>
        <div>
          Selected: {selectedCity ? selectedCity.name : null}
        </div>
        <GMap
          selectedItem={selectedCity}
          items={cities}
          onMarkerClick={this.markerClickHandler}
        />
      </div>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        cities: [
          { name: 'Lublin', lat: 51.15, lng: 22.34 },
          { name: 'Rzeszów', lat: 50.0409, lng: 21.9992 },
          { name: 'Łódź', lat: 51.45, lng: 19.27 },
          { name: 'Kraków', lat: 50.06465, lng: 19.94498 },
          { name: 'Warszawa', lat: 52.14, lng: 21.0 },
          { name: 'Szczecin', lat: 53.25, lng: 14.35 }
        ]
      });
    }, 2200);
  }

  private markerClickHandler = (city: City) => {
    this.setState(function (state) {
      return {
        selectedCity: state.selectedCity === city ? null : city
      };
    });
  };

}
