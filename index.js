const channels = document.querySelectorAll('.preview-container__head-info');
const subscriptionLinks = document.querySelectorAll('.subscription-link');

// adding link functionality to channel page links for switching to channelpage.html
[...channels, ...subscriptionLinks].forEach((item) => {
  item.addEventListener('click', () => {
    window.location.href = './channelpage.html';
  });
});

// link functionality for video-prewiev switching to videopage.html
const videoPreviewsItems = document.querySelectorAll('.video-preview');
videoPreviewsItems.forEach((item) =>
  item.addEventListener('click', () => {
    window.location.href = './videopage.html';
  })
);
