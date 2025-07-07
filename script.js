// Bio hover functions
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

// Scroll to founders section
function scrollToFounders() {
  const section = document.querySelector(".team-section");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Send contact form via EmailJS
function sendMessage(e) {
  e.preventDefault();

  document.getElementById("contact-status").innerText = "Sending...";

  emailjs.send("service_0xzenmr", "template_iau7c8k", {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  })
  .then(function (response) {
    document.getElementById("contact-status").innerText = "✅ Message sent!";
    document.getElementById("contact-form").reset();
  }, function (error) {
    document.getElementById("contact-status").innerText = "❌ Failed to send. Try again.";
    console.error("EmailJS Error:", error);
  });
}

// On page load: attach scroll & contact form handler
window.addEventListener("load", function () {
  // Auto-scroll to founders after 10s
  setTimeout(scrollToFounders, 10000);

  // Attach contact form handler here instead of inline HTML
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", sendMessage);
  }
});
