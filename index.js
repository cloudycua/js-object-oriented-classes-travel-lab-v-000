class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);     // sets as a date object
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear();       // getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    return Math.abs(beginningLocation - endingLocation);
  }
}
