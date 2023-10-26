(function () {
  "use strict";
  const forms = document.querySelectorAll(".requires-validation");
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var e = document.getElementById("position");
  var value = e.value;
  var text = e.options[e.selectedIndex].text;

  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Position: " + text);
  var text = "Name " + name + "\nEmail: " + email + "\nPosition: " + position;
  window.alert("Your form has been sent");
}
