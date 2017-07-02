module.exports = function() {
  $("[data-find-external] a[href*='http']")
    .attr("target", "_blank")
    .addClass("anchor--is-external");
}
