var darkMode = false;

// On extension button click
chrome.browserAction.onClicked.addListener(function(tab) {
  darkMode = !darkMode; // toggle the state

  // send a message to content script about the new state
  chrome.tabs.sendMessage(tab.id, {darkMode: darkMode});
});

