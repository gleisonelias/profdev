//TELA CHEIA

function toggleFullScreen() {

  if (!document.fullscreenElement &&    // alternative standard method

      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods

    if (document.documentElement.requestFullscreen) {

      document.documentElement.requestFullscreen();

    } else if (document.documentElement.msRequestFullscreen) {

      document.documentElement.msRequestFullscreen();

    } else if (document.documentElement.mozRequestFullScreen) {

      document.documentElement.mozRequestFullScreen();

    } else if (document.documentElement.webkitRequestFullscreen) {

      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);

    }

  } else {

    if (document.exitFullscreen) {

      document.exitFullscreen();

    } else if (document.msExitFullscreen) {

      document.msExitFullscreen();

    } else if (document.mozCancelFullScreen) {

      document.mozCancelFullScreen();

    } else if (document.webkitExitFullscreen) {

      document.webkitExitFullscreen();

    }

  }

}

//RANDOM COLOR



// GET CSS

 function getCSS(el) {
    el = el.get(0);
    var styles = window.getComputedStyle(el);
    var cssText = styles.cssText;
    if (!cssText) {
      cssText = Array.from(styles).reduce((str, property) => {
        return `${str}${property}:${styles.getPropertyValue(property)};`;
      }, '');
    }
    return cssText;
  };
