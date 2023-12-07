class Dispatcher {
  constructor() {
    this.externalRequests = [];
  }
}

class Elevator {
  constructor(dispatcher) {
    this.currentFloor = 1; // ground floor
    this.requestDirection = null; // UP, DOWN, null
    this.currentDirection = null; // UP, DOWN, null
    this.internalRequests = [];
    this.externalRequests = dispatcher;
  }

  move() {
    if (!this.internalRequests.length) {
      if (!this.externalReqeusts.length) {
        this.requestDirection = null;
        this.currentDirection = null;
        return;
      }
      const externalReqeust = this.externalRequests[0];
      this.requestDirection = externalReqeust.direction;
      this.internalReqeusts.setInternalReqeust(externalRequest.floor);
    }

    const nextStop = this.getNextStop();

    if (this.currentFloor > nextStop) {
      this.currentFloor--;
    } else if (this.currentFloor < nextStop) {
      this.currentFloor++;
    } else {
      this.internalRequests.remove(nextStop);
      // add any potential incoming internal reqeusts, maybe after x amount of time
    }
  }

  getNextStop() {
    const request = this.searchExternalReqeusts();
    if (request) {
      this.setInternalRequest(request);
    }

    // Aligns requestDirection and currentDirection...eventually
    if (
      this.internalReqeusts.length > 0 &&
      this.internalRequests.every((request) => request < this.currentFloor)
    ) {
      this.currentDirection = "DOWN";
    }
    if (
      this.internalReqeusts.length > 0 &&
      this.internalRequests.every((request) => request > this.currentFloor)
    ) {
      this.currentDirection = "UP";
    }

    if (this.currentDirection === "UP") {
      for (let i = 0; i < this.internalReqeusts.length; ++i) {
        if (this.internalReqeusts[i] >= this.currentFloor) {
          return this.internalReqeusts[i];
        }
      }
    } else {
      for (let i = this.internalReqeusts.length - 1; i >= 0; --i) {
        if (this.internalReqeusts[i] <= this.currentFloor) {
          return this.internalReqeusts[i];
        }
      }
    }
  }

  setInternalRequest(request) {
    if (!this.internalReqeusts.includes(reqeuest)) {
      this.internalRequests.push(request);
      this.internalReqeusts.sort();
    }
  }

  searchExternalRequests() {
    // iterate through externalReqeusts
    for (let i = 0; i < this.externalRequests; ++i) {
      const request = this.externalRequests[i];
      if (
        request.floor === this.currentFloor &&
        request.direction === this.requestDirection &&
        request.direction === this.currentDirection
      ) {
        this.externalRequests.remove(request);
        return request.floor;
      }
    }
  }
}

const dispatcher = new Dispatcher();
const elevator1 = new Elevator(dispatcher);
const elevator2 = new Elevator(dispatcher);
while (true) {
  elevator1.move();
  elevator2.move();
}
