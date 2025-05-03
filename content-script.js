if (document.querySelector(".meteredContent")) {
  chrome.runtime.sendMessage({ action: "paid-article" });
}
