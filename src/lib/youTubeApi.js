const key = process.env.REACT_APP_API_KEY;

export async function fetchVideos(keyWord) {
  const apiBaseUrl = `https://content-youtube.googleapis.com/youtube/v3/search?part=id&part=snippet&maxResults=25&q=${keyWord}&key=${key}`;

  return fetch(apiBaseUrl)
    .then((response) => (response.ok ? response.json() : []))
    .then((data) =>
      data
        ? {
            items: data.items,
          }
        : {
            items: [],
          }
    );
}
