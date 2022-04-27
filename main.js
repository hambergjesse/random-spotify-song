function makeid(length) {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// fetch random song & replace ID in source URL
function getASong() {
  let random_seed = makeid(2);
  let random_offset = Math.floor(Math.random() * 2000); // returns a random integer from 0 to 9
  $.ajax({
    url:
      "https://api.spotify.com/v1/search?type=track&offset=" +
      random_offset +
      "&limit=1&q=" +
      random_seed,
    type: "GET",
    success: function (data) {
      console.log(data);

      play(trackUri);
      document
        .querySelector(".spotify-song")
        .attr(
          "src",
          "https://open.spotify.com/embed/track/" +
            data.tracks.items[0].id +
            "?utm_source=generator&theme=0"
        );
    },
  });
}
