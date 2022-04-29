function makeId(length) {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// fetch random song
function getASong() {
  let random_seed = makeId(2);
  let random_offset = Math.floor(Math.random() * 2000); // returns a random integer from 0 to 9
  let songURL =
    "https://api.spotify.com/v1/search?type=track&offset=" +
    random_offset +
    "&limit=1&q=" +
    random_seed;
  function replaceID() {
    document
      .querySelector(".spotify-song")
      .attr(
        "src",
        "https://open.spotify.com/embed/track/" +
          songURL +
          "?utm_source=generator&theme=0"
      );
    console.log(replaceID);
    document.querySelector(".spotify-song").attr("src", replaceID);
  }
  console.log(replaceID);
}

//replace song ID
/*function replaceID() {
  document
    .querySelector(".spotify-song")
    .attr(
      "src",
      "https://open.spotify.com/embed/track/" +
        options +
        "?utm_source=generator&theme=0"
    );
}*/

// fetch random song & replace ID in source URL
/*function getASong() {
  let random_seed = makeId(2);
  let random_offset = Math.floor(Math.random() * 2000); // returns a random integer from 0 to 9
  let options = {
    url:
      "https://api.spotify.com/v1/search?type=track&offset=" +
      random_offset +
      "&limit=1&q=" +
      random_seed,
    type: "GET",
    success: function (data) {
      console.log(data);

      document
        .querySelector(".spotify-song")
        .attr(
          "src",
          "https://open.spotify.com/embed/track/" +
            songID +
            "?utm_source=generator&theme=0"
        );
    },
  };
  console.log(options);
}*/
