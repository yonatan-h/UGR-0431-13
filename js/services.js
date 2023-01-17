const transcripts = [...document.querySelectorAll(".transcript")];
transcripts.forEach((transcript) => {
  const toggler = transcript.querySelector(".transcript__toggle");
  const content = transcript.querySelector(".transcript__lines-wrapper");

  toggler.addEventListener("click", () => {
    content.classList.toggle("transcript__lines-wrapper--hidden");
  });
});
