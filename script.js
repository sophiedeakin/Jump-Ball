// code used from https://shihabiiuc.com/prevent-space-bar-key-from-scrolling-web-page/
window.addEventListener("keydown", function (e) {
    if (e.keyCode === 32) {
      e.preventDefault();
    }
  });      
