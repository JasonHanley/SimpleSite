// https://github.com/sysleaf/js-auto-hide-header-onscroll

var lastKnownScrollY = 0;
var currentScrollY = 0;
var ticking = false;
var idOfHeader = 'header';
var eleHeader = null;
var scrollElements = [];

const classes = {
  pinned: 'pin',
  unpinned: 'unpin',
};

function onScroll() {
  currentScrollY = window.pageYOffset;
  requestTick();
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(update);
  }
  ticking = true;
}

function update() {
  if (currentScrollY < 16 /*lastKnownScrollY*/) {
    pin();
  } else if (currentScrollY > lastKnownScrollY) {
    unpin();
  }
  lastKnownScrollY = currentScrollY;
  ticking = false;
}

function pin() {
    for(var i = 0; i < scrollElements.length; i++) {
        scrollElements[i].classList.remove(classes.unpinned);
        scrollElements[i].classList.add(classes.pinned);
    }
}

function unpin() {
    for(var i = 0; i < scrollElements.length; i++) {
        scrollElements[i].classList.remove(classes.pinned);
        scrollElements[i].classList.add(classes.unpinned);
    }
}

window.onload = function(){
    eleHeader = document.getElementById(idOfHeader);
    scrollElements.push(document.getElementById("header"));
    scrollElements.push(document.getElementById("nav"));
    scrollElements.push(document.getElementById("main"));
    scrollElements.push(document.getElementById("footer"));
    document.addEventListener('scroll', onScroll, false);
};
