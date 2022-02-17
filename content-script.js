console.log('hello world!')

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log('request', request)
        navigator.clipboard.readText().then(
            clipText => {
                console.log('selected', request.selected)
                console.log('clipText', clipText)
            }
        )
    }
);