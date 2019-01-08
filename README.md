### Description
This Google Chrome extension is intented to be used in Zendesk ticketing tool. It auto refreshes the tickets queue page so you don't need to manually refresh it every time to see new tickets. It has the following features:

* By default it auto refreshes the page every 20(s).
* When clicking on the extension icon, a pop up opens. You can change the refresh time there.
* The extension only runs in the Zendesk ticket queue page.

### Installation
Clone the repository and change the URLs in `manifest.json` and `background.js` to use yours. Then in Google Chrome go to `chrome://extensions/`. Here you need to enable the **Developer Mode** and then click on **Load Unpacked** to import the directory.
