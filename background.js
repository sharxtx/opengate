chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "redirect") {
    const encodedUrl = encodeURIComponent(message.url);
    const freediumUrl = `https://freedium.cfd/${encodedUrl}`; 
    chrome.tabs.create({ url: freediumUrl }, (tab) => {
      console.log("[Freedium] Redirected to freedium:", freediumUrl);
    });
  }
});