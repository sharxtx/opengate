document.getElementById("freedium-yes").addEventListener("click", () => {
  chrome.runtime.sendMessage({
    action: "redirect",
    url: window.location.href,
  });
  document.getElementById("freedium-modal").remove();
});

document.getElementById("freedium-no").addEventListener("click", () => {
  document.getElementById("freedium-modal").remove();
});
