/**
 * Tour model
 */
 class Tour {
    constructor(data = {}) {
      this.id = null;
      this.name = null;
      this.summit = null;
      this.date = null;
      this.region = null;
      this.tourType = null;
      this.heightGain = null;
      this.heightLoss = null;
      this.startPoint = null;
      this.endPoint = null;
      this.waypoints = null;
      this.distance = null;
      this.time = null;
      this.description = null;
      this.emptySlots = 0;
      this.cost = null;
      Object.assign(this, data);
    }
  }
  export default Tour;
  