const replaceyForm = document.getElementById("replacey-form");
const searchText = document.getElementById("search");
const replaceText = document.getElementById("replace");

replaceyForm.onsubmit = function(e){
    e.preventDefault();
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "REPLACE_TEXT", find: searchText.value, replace: replaceText.value});
        window.close();
    })
}