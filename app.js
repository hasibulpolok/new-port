// app.js
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const yearEl = document.getElementById("year");
const copyBtn = document.getElementById("copyBtn");
const contactForm = document.getElementById("contactForm");

yearEl.textContent = new Date().getFullYear();

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
});

nav.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

copyBtn.addEventListener("click", async () => {
  const email = "hasibulpolok.bdn@gmail.com";
  try {
    await navigator.clipboard.writeText(email);
    copyBtn.textContent = "Copied";
    setTimeout(() => (copyBtn.textContent = "Copy Email"), 1200);
  } catch {
    alert(email);
  }
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(contactForm);
  const name = (fd.get("name") || "").toString().trim();
  const email = (fd.get("email") || "").toString().trim();
  const message = (fd.get("message") || "").toString().trim();

  const subject = encodeURIComponent(`Website Contact — ${name || "New message"}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
  );

  window.location.href = `mailto:hasibulpolok.bdn@gmail.com?subject=${subject}&body=${body}`;
});
