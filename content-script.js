console.log('hello world!')

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log('request', request)
        navigator.clipboard.readText().then(
            clipText => {
                console.log('selected', request.selected)
                console.log('clipText', clipText)
                let selection = window.getSelection().getRangeAt(0);
                let selectedText = selection.extractContents();
                let span = document.createElement("span");
                span.style.color = "#ff8181"
                span.appendChild(selectedText)
                selection.insertNode(span)

            }
        )
    }
);