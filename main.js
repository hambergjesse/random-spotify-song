let Spotify = require("spotify-web-api-js");
let s = new Spotify();
//s.searchTracks()...

let spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken("");

// Set all credentials at the same time
spotifyApi.setCredentials({
  accessToken: "myAccessToken",
  refreshToken: "myRefreshToken",
  redirectUri: "http://127.0.0.1:5500/index.html",
  "clientId ": "dabf5dfc80a74041a03084632fecfaeb",
  clientSecret: "f58350e65a8742c2b3ab705d3d106a7c",
});

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

// fetch random song
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

// idk tries to replace song ID with new song ID
/*function getSong(songs) {
  let sourceLink = `<iframe src="https://open.spotify.com/embed/track/2KvHC9z14GSl4YpkNMX384?utm_source=generator&theme=0"></iframe>`;
  songs.forEach(function (song) {
    sourceLink += `<iframe src="https://open.spotify.com/embed/track/${song}?utm_source=generator&theme=0"></iframe>`;
  });
  // replaces song source link
  function replaceURL(song) {
    document.getElementsByClassName("spotify-song").src = song;
  }
}

("https://open.spotify.com/embed/track/ + ${song} + ?utm_source=generator&theme=0");*/
