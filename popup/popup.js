document.getElementById("yes").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentUrl = encodeURIComponent(tabs[0].url);
    chrome.tabs.create({ url: `https://freedium.cfd/${currentUrl}` });
    window.close();
  });
});

document.getElementById("no").addEventListener("click", () => {
  window.close();
});
