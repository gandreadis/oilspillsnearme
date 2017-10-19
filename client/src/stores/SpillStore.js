import {action, computed, observable} from "mobx";
import fetchJSON from "../api/fetch-json";

export class SpillStore {
  @observable spillRegistry = observable.map();

  @computed
  get spills() {
    return this.spillRegistry.values();
  }

  getSpill(id) {
    return this.spillRegistry.get(id);
  }

  @action
  load() {
    if (this.spillRegistry.values.length > 0) {
      return;
    }

    fetchJSON("/oil-spills")
      .then(action(spills => {
        this.spillRegistry.clear();
        spills.forEach(spill => this.spillRegistry.set(spill.id, spill));
      }));
  }
}

export default new SpillStore();
