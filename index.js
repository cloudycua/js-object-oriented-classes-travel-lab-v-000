class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);     // sets as a date object
  }

  yearsExperienceFromBeginningOf(endDate) {
    return Math.round((endDate - this.startDate)/365);
  }

}

class Route {

}
