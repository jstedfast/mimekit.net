(function () {
  "use strict";

  if (!navigator.clipboard) {
    return;
  }

  document.documentElement.classList.add("js");

  document.querySelectorAll(".copy-button").forEach(function (button) {
    var label = button.querySelector(".label");
    var original = label.textContent;
    var timer;

    button.addEventListener("click", function () {
      var source = document.getElementById(button.getAttribute("data-copy"));

      navigator.clipboard.writeText(source.textContent.trim()).then(function () {
        button.classList.add("copied");
        label.textContent = "Copied";
        clearTimeout(timer);
        timer = setTimeout(function () {
          button.classList.remove("copied");
          label.textContent = original;
        }, 2000);
      });
    });
  });
})();
