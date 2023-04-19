import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe, {
	loop: true,
	fullscreen: true,
	quality: '1080p',
});

const getCurrentTime = function (currentTime) {
	const seconds = currentTime.seconds;
	localStorage.setItem(TIME_KEY, JSON.stringify(seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', function () {
	localStorage.removeItem(TIME_KEY);
	player.setCurrentTime(0);
});

const savedPlaybackTime = JSON.parse(localStorage.getItem(TIME_KEY));
if (savedPlaybackTime) {
	player.setCurrentTime(savedPlaybackTime);
}
