document.getElementById("img").addEventListener("click",()=>{
    console.log("popup")
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'hi')
    })
},false)