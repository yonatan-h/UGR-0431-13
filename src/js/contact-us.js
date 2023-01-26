const copyEmailButtion = document.querySelector("#copy-email-address-button");
const emailAddressParagraph = document.querySelector(
  "#email-address-paragraph"
);

copyEmailButtion.addEventListener("click", async () => {
  const email = emailAddressParagraph.textContent;
  await navigator.clipboard.writeText(email);
  alert(`${email} is on your clipboard`);
});

const contactForm = document.querySelector("#contact-form");
const textArea = contactForm.querySelector("#message");

contactForm.onsubmit = (event) => {
  const messageText = textArea.value;
  if (messageText.length < 100) {
    event.preventDefault();
    alert("please write more than 100 characters in the 'message' field");
  }
};
