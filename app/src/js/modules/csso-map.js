module.exports = function() {
  function initMap() {
    var address = {lat: 49.8254916, lng: 18.2491378};
    var map = new google.maps.Map(document.getElementById('js-map'), {
      zoom: 17,
      center: address,
      scrollwheel: false
    });
    var marker = new google.maps.Marker({
      position: address,
      map: map
    });
  }

  initMap();  
}
