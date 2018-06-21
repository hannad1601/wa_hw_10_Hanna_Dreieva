window.onload = function() {
  var lights = document.querySelectorAll(".light");
  lights.forEach(function(element, index) {
    element.addEventListener("click", function() {
      var classAttr = element.getAttribute("class");
      var color = classAttr.replace("light ", "");
      element.style = "background-color: " + color;
      lights.forEach(function(e, index) {
        if (e != element) {
          e.style = "background-color: #FFF";
        }
      });
    });
  });
}
