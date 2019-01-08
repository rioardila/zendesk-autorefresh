const defaultRefreshTime = 20

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({refreshTime: defaultRefreshTime}, function() {
      console.log("App installed with refreshTime = ", defaultRefreshTime)
    })
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {urlContains: 'userzoom.zendesk.com/agent/filters/'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }])
    })
  })
