const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const envelopeScreen = document.getElementById("envelopeScreen");
const card = document.getElementById("card");

openBtn.addEventListener("click", () => {
  envelope.classList.add("open");

  setTimeout(() => {
    envelope.classList.add("fade");
  }, 700);

  setTimeout(() => {
    envelopeScreen.classList.add("hidden");
    card.classList.remove("hidden");
  }, 1300);
});
