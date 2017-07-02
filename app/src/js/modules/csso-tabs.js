module.exports = function() {
  var activeClass = "tab--is-active";

  function removeActiveClass(items) {
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove(activeClass)
    }
  };

  function onTabClick(event) {
    var tabs = this.closest("[data-tabs]");
    var target = tabs.querySelector(this.getAttribute("data-tabs-link"));
          
    // Remove active class from both links and tabs
    removeActiveClass(tabs.querySelectorAll("[data-tab], [data-tabs-link]"));

    // Add active class to clicked link and tab
    this.classList.add(activeClass);
    target.classList.add(activeClass);
  }

  var tabLinks = document.querySelectorAll('[data-tabs-link]');

  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener("click", onTabClick);
  }
}
