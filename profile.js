// profile.js
// This script waits 10 seconds after page load and then shows the profile image

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const profilePictureElement = document.getElementById('profile-pic');
    profilePictureElement.style.display = 'block';
  }, 10000);
});

/*
* References:
* - I used W3Schools for: JavaScript setTimeout: https://www.w3schools.com/jsref/met_win_settimeout.asp
* - I used MDN for: DOMContentLoaded event: https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
*/
