import DataApiService from '../../../api/data-api.service';
import createObservableService from '../../../services/create-observable-service';

const url = '/api/real-estates';
const api = new DataApiService(url);

export interface RealEstate {
  id: number;
  builtAt: string;
  lat: number;
  lng: number;
  price: number;
  street: string;
  type: string;
}

const manageRealEstatesService = createObservableService({
  selected: null,
  realEstates: [] as RealEstate[],

  fetchAll() {
    api
      .getAll()
      .then((realEstates) => {
        this.realEstates = realEstates as RealEstate[];
        this.selected = null;
        this._notifyListeners()
      });
  },

  toggleSelected(estate: RealEstate) {
    this.selected = this.selected === estate ? null : estate;
    this._notifyListeners();
  },

});

export default manageRealEstatesService;
