document.addEventListener('DOMContentLoaded', function() {
    const scene = document.querySelector('a-scene');
    const splash = document.querySelector('#splash');
    const loading = document.querySelector('#splash .loading');
    const startButton = document.querySelector('#splash .start-button');

    const emitEvent = (eventName, listeners) => {
        listeners.forEach((listener) => {
            const el = document.querySelector(listener);
            el.emit(eventName);
        })
    };

    const emitMediaEvent = (eventType, listeners) => {
        listeners.forEach((listener) => {
            const el = document.querySelector(listener);
            el.components.sound[eventType]();
        })
    };

    const activateSoundsForTouch = () => {
    	const sounds = document.querySelectorAll('a-sound')
        sounds.forEach((soundEl) => {
            soundEl.components.sound.playSound();
            soundEl.components.sound.stopSound();
        })
    };

    var fuse = document.querySelector('#fuse-cursor');
    var fuseProgress = document.querySelector('#fuse-progress');

    scene.addEventListener('loaded', function (e) {
        setTimeout(() => {
            loading.style.display = 'none';
            splash.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
            startButton.style.opacity = 1;
        }, 50);
    });

    fuse.addEventListener('fusing', function (e) {
        fuseProgress.emit('fusing');
    });

    startButton.addEventListener('click', function (e) {
        activateSoundsForTouch();
        splash.style.display = 'none';
        emitEvent('scene-started', ['#obj-model-40', '#obj-model-41', '#car-2', '#car', '#car-1', '#green', '#purple', '#ballon-low-intersection', '#blue', '#text', '#text']);
    });

    document.querySelector('#green').addEventListener('click', function (e) {
        emitEvent('green-clicked', ['#main-camera']);
    });

    document.querySelector('#ballon-low-intersection').addEventListener('click', function (e) {
        emitEvent('ballon-low-intersection-clicked', ['#main-camera']);
    });

    document.querySelector('#purple').addEventListener('click', function (e) {
        emitEvent('purple-clicked', ['#main-camera']);
    });

    document.querySelector('#blue').addEventListener('click', function (e) {
        emitEvent('blue-clicked', ['#main-camera']);
    });
});