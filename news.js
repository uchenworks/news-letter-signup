const inputField = document.getElementById("input_text_field");
const enteredMail = document.querySelector(".email-highlight");
const submitBtn = document.getElementById("input_submit_btn");
const dismissBtn = document.querySelector(".dismiss-btn");
const container = document.querySelector(".wrapper");
const thanksMessage = document.querySelector(".thanks_wrapper");
const validMailElement = document.querySelector(".valid_mail");

submitBtn.addEventListener("click", () => {
  const typedText = inputField.value;

  enteredMail.innerText = `${typedText}`;
  if (validateEmail(typedText)) {
    thanksMessage.style.display = "block";
    container.style.display = "none";
  } else {
    validMailElement.style.display = "block";
    inputField.style.background = " hsl(4, 91%, 91%)";
    inputField.style.outlineColor = " 4px hsl(4, 100%, 67%)";
    inputField.style.border = "2px solid";
    inputField.style.color = "hsl(4, 100%, 67%)";
  }
});

dismissBtn.addEventListener("click", () => {
  container.style.display = "block";
  thanksMessage.style.display = "none";
  inputField.style.background = "white";
  inputField.style.color = "var(--Grey)";
  inputField.style.border = " 1px solid var(--Grey)";
  validMailElement.style.display = "none";
});

function validateEmail(email) {
  // This is a simple email validation function, you can replace it with a more robust one
  const pattern = /^[a-zA-Z]\w*([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return pattern.test(email);
}
