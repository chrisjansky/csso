module.exports = function() {
  var activeClass = "menu--is-active";

  var linksObj = document.querySelectorAll('[data-menu-link]');

  for (var i = 0; i < linksObj.length; i++) {
    linksObj[i].onclick = function() {
      document.body.classList.remove(activeClass);
    }
  }
}
