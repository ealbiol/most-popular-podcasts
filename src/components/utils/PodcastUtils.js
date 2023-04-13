
import moment from "moment";
export const checkIfDayPassed = (date) => {
  const hours = moment().diff(moment(date), 'hours');

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
export const episodesNeedRecall = (arrEpisodes, id_podcast) => {
  const episodes = arrEpisodes.find((episodesRec) => episodesRec.id_podcast === id_podcast);
  // If no episodes, then we directly call for them
  if (!episodes) {
    return {
       needed: true
    };
  } else {
    if (checkIfDayPassed(episodes.date)) {
      return {
        needed: true
      }
    } else {
      return {
        needed: false,
        episodes
      }
    }
  }
}
