import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import GMap from '../../components/GMap';
import RealEstateDetails from './components/RealEstateDetails';
import DataTable from '../../components/DataTable';
import manageRealEstatesService, { RealEstate } from './services/manage-real-estates-service';

interface RealEstatesState {
  selected: RealEstate | null;
  realEstates: RealEstate[];
}

export default class RealEstates extends React.Component<{}, RealEstatesState> {
  private unsubscribe = () => { };
  private metaData = [
    { value: 'street', text: 'Ulica' },
    { value: 'lat', text: 'Wysokosc geo.' },
    { value: 'lng', text: 'Dlugosc geo.' },
  ];

  constructor(props = {}) {
    super(props);
    const { selected, realEstates } = manageRealEstatesService;
    this.state = {
      selected,
      realEstates
    };
  }

  componentDidMount() {
    this.unsubscribe = manageRealEstatesService.subscribe(() => {
      const { selected, realEstates } = manageRealEstatesService;
      this.setState({
        selected,
        realEstates
      });
    });
    manageRealEstatesService.fetchAll();
  }

  render() {
    const { realEstates, selected } = this.state;

    return (
      <div>
        <h3>RealEstates</h3>
        <Row>
          <Col sm="8">
            <GMap
              items={realEstates}
              selectedItem={selected}
              onMarkerClick={this.selectRealEstateHandler}
            />
          </Col>
          <Col sm="4">
            <RealEstateDetails item={selected} />
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable
              items={realEstates}
              selectedItem={selected}
              onRowClick={this.selectRealEstateHandler}
              metaData={this.metaData}
            />
          </Col>
        </Row>
      </div>
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  private selectRealEstateHandler = (estate: RealEstate) => {
    console.log('select RE', estate);
    manageRealEstatesService.toggleSelected(estate);
  };
}
