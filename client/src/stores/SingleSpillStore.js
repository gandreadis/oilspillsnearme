import {action, observable, runInAction} from "mobx";
import fetchJSON from "../api/fetch-json";

export class SingleSpillStore {
  spillId = observable(-1);
  spill = observable({});
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

    const beachItems = await fetchJSON(`/oil-spills/${spillId}/beaches`);
    runInAction(() => {
      this.beaches.clear();
      beachItems.forEach(item => {
        this.beaches.push(item);
      });
    });

    const seafoodProductionItems = await fetchJSON(`/oil-spills/${spillId}/seafood_production`);
    runInAction(() => {
      seafoodProductionItems.forEach(item => {
        this.seafood_production.push(item);
      });
    });

    const tourismArrivalItems = await fetchJSON(`/oil-spills/${spillId}/tourism_arrival`);
    runInAction(() => {
      tourismArrivalItems.forEach(item => {
        this.tourism_arrival.push(item);
      });
    });

    const tourismExpendituresItems = await fetchJSON(`/oil-spills/${spillId}/tourism_expenditures`);
    runInAction(() => {
      tourismExpendituresItems.forEach(item => {
        this.tourism_expenditures.push(item);
      });
    });
  }
}

export default new SingleSpillStore();
