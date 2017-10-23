import {action, computed, observable} from "mobx";
import fetchJSON from "../api/fetch-json";

export class SpillStore {
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
        spills.forEach(spill => this.spillRegistry.set(spill.id, spill));
      }));
  }

  @action
  setCurrentPosition(lat, lng) {
    this.currentLatitude.set(lat);
    this.currentLongitude.set(lng);
  }

  getNearestSpills() {
    if (this.spills.length === 0) {
      return [];
    }
    var tempList, oilSpillList, dif, i;
    tempList = oilSpillList = [];
    for (i = 0; i < this.spills.length; i++) {
      dif = DistanceFromCurrentLocationToOilSpill(
        this.currentLatitude, this.currentLongitude, this.spills[i].lat, this.spills[i].lng);
      tempList.push([dif, this.spills[i].id]);
    }
    tempList.sort(sortDistance);
    for (i = 0; i < 5; i++)
    {
      oilSpillList.push(tempList[i][1]);
    }
    return oilSpillList;
  }
}

function DegressToRadians(deg) {
  return deg * (Math.PI / 180);
}

function DistanceFromCurrentLocationToOilSpill(lat1, lon1, lat2, lon2) {
  lat1 = DegressToRadians(lat1);
  lat2 = DegressToRadians(lat2);
  lon1 = DegressToRadians(lon1);
  lon2 = DegressToRadians(lon2);
  var R = 6371; // Radius of the earth in km
  var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
  var y = (lat2 - lat1);
  return Math.sqrt(x * x + y * y) * R; // Distance in km from current location to each oil spill
}

function sortDistance(a, b) {
  return a[0] === b[0] ? 0 : (a[0] < b[0]) ? -1 : 1;
}

export default new SpillStore();
