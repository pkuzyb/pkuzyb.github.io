(function () {
  "use strict";

  var btn = document.querySelector(".menu-btn");
  if (btn) {
    btn.addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
    });
  }

  // Close the tab menu after picking a destination
  var tabs = document.querySelectorAll(".mobilenav a");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function () {
      document.body.classList.remove("nav-open");
    });
  }

  // If the screen grows back to desktop, make sure the menu is closed
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      document.body.classList.remove("nav-open");
    }
  });
})();
