module.exports = function() {
  var
    jsHeadroom = document.getElementById("js-headroom");

  var cssoHeadroom = new Headroom(jsHeadroom, {
    "tolerance": {
      down: 200,
      up: 100
    }
  }).init();
}
