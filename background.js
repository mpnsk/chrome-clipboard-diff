chrome.runtime.onInstalled.addListener(() => {
    console.log('installed')
});

function getword(info, tab) {
    if (info.menuItemId !== CONTEXT_MENU_ID) {
        return;
    }
    console.log('get word')
    console.log('info', info)
    console.log('tab', tab)
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
