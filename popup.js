// Display current refresh time
function display_time() {
  chrome.storage.sync.get(['refreshTime'], function(result) {
    //console.log("newTime",result.refreshTime)
    document.getElementById("currentTime").textContent = result.refreshTime
  })
}

// Saves options to chrome.storage
function save_options() {
  var refreshTime = document.getElementById('refreshTimeInput').value;
  chrome.storage.sync.set({refreshTime: refreshTime}, function() {
    //console.log('New refresh interval value', refreshTime);
    display_time()
    // Close popup
    setTimeout(() => {
      window.close()
    }, 800)
  })
}

document.getElementById('save').addEventListener('click', save_options)

display_time()
