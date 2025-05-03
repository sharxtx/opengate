chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.action === "paid-article") {
    chrome.action.setBadgeText({
      tabId: sender.tab.id,
      text: "🔓",
    });
    chrome.action.setBadgeBackgroundColor({
      tabId: sender.tab.id,
      color: "#4CAF50",
    });
  }
});
