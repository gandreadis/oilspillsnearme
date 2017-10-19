import {action, observable, runInAction} from "mobx";
import fetchJSON from "../api/fetch-json";

export class CountryRigStore {
  countryOilRigs = observable.shallowArray();

  @action
  async load() {
    if (this.countryOilRigs.length > 0) {
      return;
    }

    const oilRigs = await fetchJSON("/oil-rigs");
    const countriesGeoJSON = await fetchJSON("/data/countries.geo.json");

    const countryOilRigItems = [];
    oilRigs.forEach(rigsOfCountry => {
      const geoMatches = countriesGeoJSON.filter(geoCountry =>
        geoCountry.properties.admin.toLowerCase() === rigsOfCountry.countryName.toLowerCase());

      if (geoMatches.length !== 0) {
        geoMatches[0].properties.rigs = rigsOfCountry;
        countryOilRigItems.push(geoMatches[0]);
      }
    });

    runInAction(() => {
      countryOilRigItems.forEach(item => this.countryOilRigs.push(item));
    });
  }
}

export default new CountryRigStore();
