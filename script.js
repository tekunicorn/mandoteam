/* Deprecation warning */
if (document.location.hostname === "mandoradio.blogspot.com" && document.body.innerHTML.includes("[uyarı]")) {
    
    // HTML'deki başlık, açıklama ve link içeriklerini al
    var popupMessageHeader = document.querySelector('[data-popup-header]').innerHTML || "Uyarı Başlığı";
    var popupMessageWarning = document.querySelector('[data-popup-warning]').innerHTML || "Uyarı Mesajı";
    var popupMessageUrl = document.querySelector('[data-popup-url]').innerHTML || "#";

    // Pop-up'ı oluştur
    document.body.classList.add("outdated-spec");
    var node = document.createElement("p");
    node.classList.add("outdated-warning");
    node.tabIndex = -1;
    node.setAttribute("role", "dialog");
    node.setAttribute("aria-modal", "true");
    node.setAttribute("aria-labelledby", "outdatedWarning");

    var frag = document.createDocumentFragment();
    var heading = document.createElement("strong");
    heading.id = "outdatedWarning";
    heading.innerHTML = popupMessageHeader; // Başlığı kullan
    frag.appendChild(heading);

    var anchor = document.createElement("a");
    anchor.href = popupMessageUrl; // URL'yi kullan
    anchor.innerText = popupMessageUrl + ".";

    var warning = document.createElement("span");
    warning.innerText = popupMessageWarning + " "; // Uyarı mesajını kullan
    warning.appendChild(anchor);
    frag.appendChild(warning);

    var button = document.createElement("button");
    var handler = makeClickHandler(node);
    button.addEventListener("click", handler);
    button.innerHTML = "&#9662; Kapat";
    frag.appendChild(button);
    node.appendChild(frag);

    function makeClickHandler(node) {
        var isOpen = true;
        return function collapseWarning(event) {
            var button = event.target;
            isOpen = !isOpen;
            node.classList.toggle("outdated-collapsed");
            document.body.classList.toggle("outdated-spec");
            button.innerText = (isOpen) ? '\u25BE Kapat' : '\u25B4 Aç';
        }
    }

    document.body.appendChild(node);
    button.focus();
    window.onkeydown = function (event) {
        var isCollapsed = node.classList.contains("outdated-collapsed");
        if (event.keyCode === 27 && !isCollapsed) { // ESC tuşu ile kapatmak için
            button.click();
        }
    }

    window.addEventListener("click", function(event) {
        if (!node.contains(event.target) && !node.classList.contains("outdated-collapsed")) {
            button.click();
        }
    });

    document.addEventListener("focus", function(event) {
        var isCollapsed = node.classList.contains("outdated-collapsed");
        var containsTarget = node.contains(event.target);
        if (!isCollapsed && !containsTarget) {
            event.stopPropagation();
            node.focus();
        }
    }, true); // use capture to enable event delegation as focus doesn't bubble up
}
