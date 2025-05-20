const form_inputs = [
  document.forms["contact_us"]["first-name"],
  document.forms["contact_us"]["last-name"],
  document.forms["contact_us"]["email"],
  document.forms["contact_us"]["query-type"],
  document.forms["contact_us"]["message"],
  document.forms["contact_us"]["consent"],
];

document.addEventListener(
  "invalid",
  (function () {
    return function (e) {
      //prevent the browser from showing default error bubble / hint
      e.preventDefault();
      // optionally fire off some custom validation handler
      // myValidation();
    };
  })(),
  true
);


function form_validation() {
  let form_correct = true;
  form_inputs.forEach((element) => {
    if (element.value == "") {
      form_correct = false;
      if (element instanceof RadioNodeList) {
        document.getElementById(
          element[0].getAttribute("aria-describedby")
        ).style.opacity = 1;
      } else {
        document.getElementById(
          element.getAttribute("aria-describedby")
        ).style.opacity = 1;
        element.classList.add("error");
      }
    } else {
      if (element instanceof RadioNodeList) {
        document.getElementById(
          element[0].getAttribute("aria-describedby")
        ).style.opacity = 0;
      } else {
        document.getElementById(
          element.getAttribute("aria-describedby")
        ).style.opacity = 0;
        element.classList.remove("error");
      }
    }
  });
  if (document.forms["contact_us"]["consent"].checked == false) {
    form_correct = false;
    document.getElementById("error-consent").style.opacity = 1;
  }

  if (form_correct) {
    document.getElementById("form-success").style.display = "flex";
  }
}
