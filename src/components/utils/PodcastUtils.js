
import moment from "moment";
export const checkIfDayPassed = (date) => {
    const hours = moment().diff(moment(date), 'hours');

    console.log("Compare", hours);
    const dayPassed = (hours > 24);
    return dayPassed
}

export const checkIfNeedsRecall = () => {
    // Retrieve the object from storage
    var retrievedObject = window.localStorage.getItem('podcast');
    if (retrievedObject) {
      const { date, entry } = JSON.parse(retrievedObject)
      let needed = false;
      const result = checkIfDayPassed(date);
          
      if (result) {
        needed = true
      }
      return {
        needed,
        entry
      }

    } else {
      return {
        needed: true
      }
    }
  }