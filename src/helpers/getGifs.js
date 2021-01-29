export const getGifs = async ( categoria ) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria)}&limit=4&api_key=lUyX8LEVelQdrydht3FjidN5n4otWIok`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map( g => {
    return {
      id: g.id,
      title: g.title,
      url: g.images?.downsized_medium.url
    }
  })
  return gifs;
}