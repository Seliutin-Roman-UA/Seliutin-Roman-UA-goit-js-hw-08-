import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';

console.log(
  'time videoplayer-current-time = ',
  localStorage.getItem('videoplayer-current-time')
);
console.log(
  'time VimeoTimeAfterUnload= ',
  localStorage.getItem('VimeoTimeAfterUnload')
);

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const startTime =
  localStorage.getItem('videoplayer-current-time') === null
    ? 0
    : localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(startTime);


//Опрашивать каждую секунду
player.on('timeupdate', Throttle(setLocalStorege, 1000));

function setLocalStorege({ seconds }) {
   localStorage.setItem('videoplayer-current-time', String(seconds));
}


// Опрашивать только при закрытии/перезагрузке странички
window.addEventListener('beforeunload', () => {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem('VimeoTimeAfterUnload', String(seconds));
    })
    .catch(function (arror) {
      return;
    });
});
