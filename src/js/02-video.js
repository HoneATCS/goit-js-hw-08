import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', onPlay);
function onPlay({seconds}) {
    console.log(seconds);
    localStorage.setItem(STORAGE_KEY, seconds);
}
    
player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);


player.on('play', onPlay);

player.on('timeupdate', throttle(onPlay, 1000));