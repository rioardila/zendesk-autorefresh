var currentInterval

function setNewInterval(intervalTime) {
  currentInterval = setInterval(() => {
    //Check if chat is open
    var chatElement = document.getElementById("ember2079")
    if (chatElement !== null && !chatElement.classList.contains("active")) {
      document.querySelector("#wrapper #main_panes .left h1 .action_button").click()
    }
  }, intervalTime * 1000);
}


window.addEventListener("load", () => {
  chrome.storage.sync.get(['refreshTime'], function(result) {
    console.log("newTime",result.refreshTime)
    const newTime = result.refreshTime
    setNewInterval(newTime)
  })
})

chrome.storage.onChanged.addListener(function(changes, namespace) {
  if (changes['refreshTime']) {
    // Clear interval and run with new time with changes['refreshTime'].newValue
    clearInterval(currentInterval)
    const newTime = changes['refreshTime'].newValue
    //console.log("newTime", newTime)
    setNewInterval(newTime)
  }
})
