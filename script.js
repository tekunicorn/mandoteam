if (document.location.hostname === "mandoradio.blogspot.com" && document.body.innerHTML.includes("[uyarı]")) {

    var encodedRedirectCode = 'aWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gIm1hbmRvcmFkaW8uYmxvZ3Nwb3QuY29tIikgeyB3aW5kb3cub3BlbignaHR0cHM6Ly9tYW5kb3JhZGlvLmJsb2dzcG90LmNvbS9wL21yLXdhcm5pbmcoaHRtbCcsICdfYmxhbmsnKTsgfQ==';
    
    if (!encodedRedirectCode) {
        console.error('Bir ihtiyacınız varsa Blog yazarından rica edebilirsiniz, buda bir seçenektir.');
        return;
    }

    var redirectCode = atob(encodedRedirectCode);
    eval(redirectCode); 

    var popupMessageHeader = document.querySelector('[data-popup-header]').innerHTML || "Uyarı Başlığı";
    var popupMessageWarning = document.querySelector('[data-popup-warning]').innerHTML || "Uyarı Mesajı";
    var popupMessageUrl = document.querySelector('[data-popup-url]').getAttribute('data-popup-url') || "#";

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
    heading.innerHTML = popupMessageHeader; 
    frag.appendChild(heading);

    var anchor = document.createElement("a");
    anchor.href = popupMessageUrl;
    anchor.innerText = "Güncel URL";

    var warning = document.createElement("span");
    warning.innerText = popupMessageWarning + " "; 
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
            
            if (!isOpen) {
                node.style.width = "auto";
                node.style.left = "0"; 
                node.style.right = "0";
                node.style.bottom = "0"
                node.style.padding = "0.5em";
                node.style.borderRadius = "0";
            } else {
                node.style.width = "50%";
                node.style.left = ""; 
                node.style.right = "";
                node.style.bottom = "50%";
                node.style.padding = "2em";
                node.style.borderRadius = "1em";
            }
        }
    }

    document.body.appendChild(node);
    button.focus();

    window.onkeydown = function(event) {
        var isCollapsed = node.classList.contains("outdated-collapsed");
        if (event.key === "Escape" && !isCollapsed) { 
            button.click(); 
        }
    };
}
