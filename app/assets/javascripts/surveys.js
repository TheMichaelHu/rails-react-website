// youtube player
let player;

function getParameterByName(key) {
  const url = window.location.href;
  const name = key.replace(/[[\]]/g, "\\$&");
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function onPlayerReady(event) {
  let startLock = false;
  let endLock = false;
  let videotime = 0;
  event.target.playVideo();

  function updateTime() {
    if (player && player.getCurrentTime) {
      videotime = Math.round(player.getCurrentTime() * 100) / 100;
      if (!startLock) {
        start.value = videotime;
      }
      if (!endLock) {
        end.value = videotime;
      }
    }
  }

  startSet.onclick = () => { startLock = true; }
  startClear.onclick = () => {
    startLock = false;
    start.value = videotime;
  }
  endSet.onclick = () => { endLock = true; }
  endClear.onclick = () => {
    endLock = false;
    end.value = videotime;
  }

  setInterval(updateTime, 100);
}

const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const videoId = getParameterByName('id');

if (videoId) {
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      width:  "100%",
      videoId,
      events: {
        onReady: onPlayerReady,
      }
    });
  }
}
