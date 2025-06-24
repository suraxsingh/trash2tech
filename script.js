function showBio(card) {
  const bio = card.querySelector(".bio");
  bio.style.opacity = "1";
  bio.style.transform = "translateY(0)";
  bio.style.maxHeight = "100px";
}

function hideBio(card) {
  const bio = card.querySelector(".bio");
  bio.style.opacity = "0";
  bio.style.transform = "translateY(10px)";
  bio.style.maxHeight = "0";
}

function scrollToFounders() {
  const section = document.querySelector(".team-section");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function handleContact(event) {
  event.preventDefault();
  document.getElementById("contact-status").innerText = "Message sent successfully!";
  setTimeout(() => {
    document.getElementById("contact-status").innerText = "";
    document.querySelector(".contact-form").reset();
  }, 3000);
}

window.addEventListener("load", function () {
  setTimeout(scrollToFounders, 10000);
});
