let eastWest = {
  '1st Avenue';
  '2nd Avenue';
  '3rd Avenue';
  'Lexington Avenue';
  'Park';
  'Madison Avenue';
  '5th Avenue'
};

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
    vertical = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    horizontal = Math.abs(eastWest.indexOf(this.beginningLocation) - eastWest.indexOf(this.endingLocation));
    return vertical + horizonal;
  }
}
