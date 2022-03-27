import {Diff, diffChars} from 'diff'

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.color) {
        console.log("Receive color = " + msg.color);
        document.body.style.backgroundColor = msg.color;
        sendResponse("Change color to " + msg.color);
    } else {
        sendResponse("Color message is none.");
    }
});


console.log('hello world!')

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log('request', request)
        navigator.clipboard.readText().then(
            clipText => {
                console.log('selected', request.selected)
                console.log('clipText', clipText)
                let selection = window.getSelection()?.getRangeAt(0);
                let selectedText = selection?.extractContents();
                let span = document.createElement("span");
                span.style.color = "#ff8181"
                span.appendChild(selectedText!)
                selection?.insertNode(span)

                const diff = diffChars(request.selected, clipText);

                diff.forEach((part:any) => {
                    // green for additions, red for deletions
                    // grey for common parts
                    // const color = part.added ? 'green' :
                    //     part.removed ? 'red' : 'grey';
                    // process.stderr.write(part.value[color]);
                    console.log('part(' + part.added + ')', part)
                });
            }
        )
    }
);
