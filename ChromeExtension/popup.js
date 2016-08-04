document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('btnCheck');
    btn.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(tab) {
            console.log(tab);
            alert('Hi !!!');
        });
    }, false);
}, false);
