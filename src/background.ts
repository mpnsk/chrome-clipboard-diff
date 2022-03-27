import OnClickData = chrome.contextMenus.OnClickData;

function polling() {
    console.log("polling");
    setTimeout(polling, 1000 * 30);
}

polling();

chrome.runtime.onInstalled.addListener(() => {
    console.log('installed')
});

function getword(info: OnClickData, tab?: chrome.tabs.Tab) {
    if (info.menuItemId !== CONTEXT_MENU_ID) {
        return;
    }
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs: chrome.tabs.Tab[]) {
        chrome.tabs.sendMessage(<number>tabs[0].id, {selected: info.selectionText}, function (response) {
            // console.log(response.farewell);
        });
    });
}

const CONTEXT_MENU_ID = "MY_CONTEXT_MENU";
chrome.contextMenus.create({
    title: "hello world",
    contexts: ["selection"],
    id: CONTEXT_MENU_ID,
});
chrome.contextMenus.onClicked.addListener(
    getword
);
