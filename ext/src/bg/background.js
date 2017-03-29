// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });

$(function(){
    var bkg = chrome.extension.getBackgroundPage();
    var group_members = Number($("#count_text").innerText.split(" ")[0]);
    bkg.console.log(group_members);
});
