// content.js
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.darkMode) {
            // enable dark mode (add your css class or style)
        } else {
            // disable dark mode (remove your css class or style)
        }
    }
);
