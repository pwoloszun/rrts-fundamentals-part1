import React from 'react';

import DataTable from '../../components/DataTable';
import DataApiService from '../../api/data-api.service';

const url = '/api/heroes';
const heroesService = new DataApiService(url);

interface Hero {
  id: number;
  name: string;
  secretIdentity: string;
  universe: string;
}

interface HeroesProps {
  heroes: Hero[];
  selectedHero: Hero | null;
}

export default class Heroes extends React.Component<{}, HeroesProps> {
  private metaData = [
    { value: 'universe', text: 'Komiksowe Uniwersum' },
    { value: 'name', text: 'Imie' },
    { value: 'secretIdentity', text: 'Tozsamosc' }
  ];

  constructor(props = {}) {
    super(props);
    this.state = {
      heroes: [],
      selectedHero: null
    };
  }

  componentWillMount() {
    heroesService.getAll().then((heroes) => {
      console.log('heroes', heroes);
      this.setState({
        heroes: heroes as Hero[]
      });
    });
  }

  render() {
    const { heroes, selectedHero } = this.state;
    return (
      <div>
        <h3>Heores</h3>

        <DataTable
          items={heroes}
          selectedItem={selectedHero}
          onRowClick={this.onRowClickHandler}
          metaData={this.metaData}
        />
      </div>
    );
  }

  private onRowClickHandler = (hero: Hero) => {
    this.setState({
      selectedHero: hero
    });
  };

}
