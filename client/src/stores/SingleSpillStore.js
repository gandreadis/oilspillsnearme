import {action, observable, runInAction} from "mobx";
import fetchJSON from "../api/fetch-json";

export class SingleSpillStore {
  spillId = observable(-1);
  spill = observable({});
  sea_species = observable.shallowArray();
  beaches = observable.shallowArray();
  seafood_production = observable.shallowArray();
  tourism_arrival = observable.shallowArray();
  tourism_expenditures = observable.shallowArray();
  error404 = observable(false);

  @action
  async load(spillId) {
    let spillObj;
    try {
      spillObj = await fetchJSON(`/oil-spills/${spillId}`);
      spillObj.sizeLog = 1;
    } catch (e) {
      this.error404.set(true);
      return;
    }

    runInAction(() => {
      Object.keys(spillObj).forEach(key => this.spill[key] = spillObj[key]);
    });
    this.spillId.set(spillId);

    const seaSpeciesItems = await fetchJSON(`/oil-spills/${spillId}/sea-species`);
    runInAction(() => {
      this.sea_species.clear();
      seaSpeciesItems.forEach(item => {
        this.sea_species.push(item);
      });
    });

    const beachItems = await fetchJSON(`/oil-spills/${spillId}/beaches`);
    runInAction(() => {
      this.beaches.clear();
      beachItems.forEach(item => {
        this.beaches.push(item);
      });
    });

    const seafoodProductionItems = await fetchJSON(`/oil-spills/${spillId}/seafood-production`);
    runInAction(() => {
      this.seafood_production.clear();
      seafoodProductionItems.forEach(item => {
        this.seafood_production.push(item);
      });
    });

    const tourismArrivalItems = await fetchJSON(`/oil-spills/${spillId}/tourism-arrival`);
    runInAction(() => {
      this.tourism_arrival.clear();
      tourismArrivalItems.forEach(item => {
        this.tourism_arrival.push(item);
      });
    });

    const tourismExpendituresItems = await fetchJSON(`/oil-spills/${spillId}/tourism-expenditures`);
    runInAction(() => {
      this.tourism_expenditures.clear();
      tourismExpendituresItems.forEach(item => {
        this.tourism_expenditures.push(item);
      });
    });
  }
}

export default new SingleSpillStore();
