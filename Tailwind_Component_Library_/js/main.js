function copyToClipboard(button) {
  const codeElement = button.nextElementSibling.querySelector("code");
  const text = codeElement.innerText;

  navigator.clipboard.writeText(text).then(() => {
    button.innerText = "Copied!";
    setTimeout(() => {
      button.innerText = "Copy";
    }, 1500);
  });
}

const toggleBtn = document.querySelector(".toggle-button");
const dropdown = document.querySelector(".dropdown-menu");

toggleBtn.addEventListener("click", () => {
  dropdown.classList.toggle("top-16");
});
