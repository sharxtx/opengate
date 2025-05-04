if (document.querySelector(".meteredContent")) {
  const rootElement = document.getElementById("root");

  if (rootElement) {
    const modal = document.createElement("div");
    modal.innerHTML = `
      <div id="freedium-modal">
        <div class="modal-content">
          <p>Looks like this is a paid article. Do you want to read it for free on freedium?</p>
          <button id="freedium-yes">Yes, free me!</button>
          <button id="freedium-no">No, thanks</button>
        </div>
      </div>
    `;
    rootElement.appendChild(modal);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = chrome.runtime.getURL("popup/modal.css");
    document.head.appendChild(link);

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
  } else {
    console.error("[Freedium] Could not find #root element");
  }
}
