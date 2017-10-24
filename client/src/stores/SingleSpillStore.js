import {action, observable, runInAction} from "mobx";
import fetchJSON from "../api/fetch-json";

export class SingleSpillStore {
  spillId = observable(-1);
  spill = observable({});
  beaches = observable.shallowArray();
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
      beachItems.forEach(item => {
        this.beaches.push(item);
      });
    });
  }
}

export default new SingleSpillStore();
