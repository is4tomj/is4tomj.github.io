"strict";

$(function () {
  buildToC();
});

function buildToC() {
  var headers = $("#main h2, #main h3, #main h4, #main h5, #main h6, #main h7, #main h8, #main h9");

  var tocDiv = $("#toc");
  if (tocDiv.length > 0) {
    var listItems = [];
    for (var i = 0; i < headers.length; i++) {
      var $header = $(headers[i]);
      var tagName = $header.prop("tagName");

      var link = $("<a>").attr("class", "toc-link").attr("href", "#" + $header.attr("id")).attr("id", 'toc-' + $header.attr("id")).append($header.text());

      link.on("click", function (e) {
        var $sourceLink = $(this);
        var href = $sourceLink.attr("href");
        var $target = $(href);
        if ($target.length > 0) {
          $target[0].scrollIntoView();
        }
        this.blur();
        e.preventDefault();
      });

      listItems.push($("<li>").attr("class", 'toc-' + tagName).append(link));
    }
    tocDiv.append($("<ul>").append(listItems));
  }
}

