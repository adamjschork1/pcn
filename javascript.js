
// shows text description of corresponding navigation icon
function navHover(buttonId, classNama) {
  var elem = document.getElementById(buttonId);
  return elem.className = classNama;
}

// hides text description of navigation via onMouseout
function styleRevert(buttonId, reverse) {
  var elem = document.getElementById(buttonId);
  return elem.className = reverse;
}
