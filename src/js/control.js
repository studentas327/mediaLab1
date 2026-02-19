// control.js - Media Lab 1
// Student: studentas327

let player = null;

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    player = document.getElementById('videoPlayer');
    
    // Attach event listeners to buttons
    document.getElementById('playBtn').addEventListener('click', playVideo);
    document.getElementById('pauseBtn').addEventListener('click', pauseVideo);
    document.getElementById('stopBtn').addEventListener('click', stopVideo);
    document.getElementById('forwardBtn').addEventListener('click', jumpForward);
    document.getElementById('backwardBtn').addEventListener('click', jumpBackward);
    document.getElementById('load1').addEventListener('click', loadVideo1);
    document.getElementById('load2').addEventListener('click', loadVideo2);
    
    console.log(' Video Player Initialized');
});


function playVideo() {
    if (player) {
        player.play();
        console.log(' Playing video');
    }
}


function pauseVideo() {
    if (player) {
        player.pause();
        console.log('⏸ Video paused');
    }
}


function stopVideo() {
    if (player) {
        player.pause();
        player.currentTime = 0;
        console.log(' Video stopped');
    }
}


function jumpForward() {
    if (player) {
        player.currentTime += 5;
        console.log(' Jumped forward 5s. Current time:', player.currentTime);
    }
}


function jumpBackward() {
    if (player) {
        player.currentTime = Math.max(0, player.currentTime - 5);
        console.log(' Jumped backward 5s. Current time:', player.currentTime);
    }
}


function loadVideo1() {
    if (player) {
        player.src = document.getElementById('url1').value;
        player.play();
        console.log(' Loaded Video 1');
    }
}


function loadVideo2() {
    if (player) {
        player.src = document.getElementById('url2').value;
        player.play();
        console.log(' Loaded Video 2');
    }
}
