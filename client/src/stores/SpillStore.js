import LogScale from "log-scale";
import {action, computed, observable} from "mobx";
import fetchJSON from "../api/fetch-json";

export class SpillStore {
  static NUM_NEAREST_SPILLS = 5;

  @observable spillRegistry = observable.map();
  currentLatitude = observable(0);
  currentLongitude = observable(0);

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

        // Compute logarithmic size
        const maxSize = Math.max(...spills.map(spill => spill.size));
        const logScale = new LogScale(1, maxSize);
        spills.forEach(spill => {
          spill.sizeLog = logScale.logarithmicToLinear(Math.max(1, spill.size));
        });

        spills.forEach(spill => this.spillRegistry.set(spill.id, spill));
      }));
  }

  @action
  setCurrentPosition(lat, lng) {
    this.currentLatitude.set(lat);
    this.currentLongitude.set(lng);
  }

  getNearestSpills() {
    if (this.spills.length <= SpillStore.NUM_NEAREST_SPILLS) {
      return this.spills.map(spill => spill.id);
    }

    var tempList, oilSpillList, dif, i;
    tempList = oilSpillList = [];
    for (i = 0; i < this.spills.length; i++) {
      dif = computeDistanceToSpill(
        this.currentLatitude, this.currentLongitude, this.spills[i].lat, this.spills[i].lng);
      tempList.push([dif, this.spills[i].id]);
    }
    tempList.sort(sortOnDistance);
    for (i = 0; i < SpillStore.NUM_NEAREST_SPILLS; i++) {
      oilSpillList.push(tempList[i][1]);
    }
    return oilSpillList;
  }
}

function degreesToRadians(deg) {
  return deg * (Math.PI / 180);
}

function computeDistanceToSpill(lat1, lon1, lat2, lon2) {
  lat1 = degreesToRadians(lat1);
  lat2 = degreesToRadians(lat2);
  lon1 = degreesToRadians(lon1);
  lon2 = degreesToRadians(lon2);

  const earthRadius = 6371;
  const x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
  const y = (lat2 - lat1);

  // Distance in km from current location to the spill with given coordinates
  return Math.sqrt(x * x + y * y) * earthRadius;
}

function sortOnDistance(a, b) {
  return a[0] === b[0] ? 0 : (a[0] < b[0]) ? -1 : 1;
}

export default new SpillStore();
