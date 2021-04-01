/**
 * User model
 */
 class Tour {
    constructor(data = {}) {
      this.tourId = null;
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
      this.numberofparticipants = null;
      this.cost = null;
      Object.assign(this, data);
    }
  }
  export default Tour;
  