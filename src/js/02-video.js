import Player from '@vimeo/player';
import  throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


function onVideoPlay ({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
}

function onLoad () {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

player.on('timeupdate', throttle(onVideoPlay, 1000));

document.addEventListener('DOMContentLoaded', onLoad);