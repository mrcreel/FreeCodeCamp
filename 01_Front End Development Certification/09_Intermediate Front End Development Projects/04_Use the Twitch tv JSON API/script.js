var c = "";
var boxId = "";
var u = "";
var s = "";
var html = "";
var users = [
  "ESL_SC2",
  "freecodecamp",
  "OgamingSC2",
  "cretetion",
  "storbeck",
  "habathcx",
  "RobotCaleb",
  "noobs2ninjas"
];

function SortByName(a, b) {
  var aName = a.toLowerCase();
  var bName = b.toLowerCase();
  return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
}

users.sort(SortByName);

var pages = ["users/"
  /*,
   "channels/",
   "streams/"*/
];
var baseUrl = "https://wind-bow.glitch.me/twitch-api/";

$(document).ready(function() {});
for (var i = 0; i < users.length; i++) {

  var userData = new XMLHttpRequest();
  userData.open("GET", baseUrl + "users/" + users[i], false);

  userData.onreadystatechange = function() {
    if (userData.readyState != 4) {
      return;
    }
    u = JSON.parse(userData.responseText);
  };

  userData.send(null);

  var streamData = new XMLHttpRequest();
  streamData.open("GET", baseUrl + "streams/" + users[i], false);

  streamData.onreadystatechange = function() {
    if (streamData.readyState != 4) {
      return;
    }
    s = JSON.parse(streamData.responseText);
  };

  streamData.send(null);

  if (s.stream === null) {
    var streamStatus = "offline";
  } else {
    var streamStatus = "online";
  }

  var channelData = new XMLHttpRequest();
  channelData.open("GET", baseUrl + "channels/" + users[i], false);

  channelData.onreadystatechange = function() {
    if (channelData.readyState != 4) {
      return;
    }
    c = JSON.parse(channelData.responseText);
  };

  channelData.send(null);

  var x = {
    userName: users[i],
    userDisplay_name: u.display_name,
    userBio: u.bio,
    userCreated_at: u.created_at,
    userLogo: u.logo,
    streamStatus: streamStatus,
    channelBanner: c.profile_banner
  };

  html +=
    "<div id = 'box_" + i + "' class = 'row box " + streamStatus + "'>" +
    "<div class = 'col-xs-3'>";
  if (x.userLogo !== null) {
    html += "<img class = 'smaller-image' src = '" + x.userLogo + "'>";
  }
  html += "</div>" +
    "<div class = 'col-xs-3'>" +

    "<a id = 'link' href = '#'>" +
    x.userDisplay_name +
    "</a> " +
    "</div>" +
    "<div class = 'col-xs-3'>" +
    streamStatus +
    "</div>" +
    "</div>";

  $("#result").html(html);
}
$("#btnAll").click(function() {
  $(".online").show();
  $(".offline").show();
});
$("#btnOnline").click(function() {
    $(".offline").hide();
    $(".online").show();
});
$("#btnOffline").click(function() {
    $(".online").hide();
    $(".offline").show();
});

//console.log(html);