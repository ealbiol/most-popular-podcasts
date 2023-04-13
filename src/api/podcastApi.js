export const fetchPodcasts = async () => {
  const response = await fetch(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
    { mode: 'cors' }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
};

export const fetchEpisodesPodcast = async (id) => {
  const response = await fetch(
    `https://itunes.apple.com/lookup?id=${id}&country=US&media=podcast&entity=podcastEpisode&limit=1000`,
    { mode: 'cors' }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
};

export const fetchSingleEpisodePodcast = async (id) => {
  const response = await fetch(
    `https://itunes.apple.com/lookup?id=${id}`,
    { mode: 'cors' }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
};
