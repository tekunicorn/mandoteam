/* Deprecation warning */
if (document.location.hostname === "mandoradio.blogspot.com" && document.body.innerHTML.includes("[uyarı]")) {

    // Şifrelenmiş yönlendirme kodunu çöz ve çalıştır
    var encodedRedirectCode = 'aWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gIm1hbmRvcmFkaW8uYmxvZ3Nwb3QuY29tIikgeyB3aW5kb3cub3BlbignaHR0cHM6Ly9tYW5kb3JhZGlvLmJsb2dzcG90LmNvbS9wL21yLXdhcm5pbmcoaHRtbCcsICdfYmxhbmsnKTsgfQ==';
    var redirectCode = atob(encodedRedirectCode);
    eval(redirectCode); // Şifreli kodu çalıştır

    // HTML'deki başlık, açıklama ve link içeriklerini al
    var popupMessageHeader = document.querySelector('[data-popup-header]').innerHTML || "Uyarı Başlığı";
    var popupMessageWarning = document.querySelector('[data-popup-warning]').innerHTML || "Uyarı Mesajı";
    var popupMessageUrl = document.querySelector('[data-popup-url]').getAttribute('data-popup-url') || "#"; // Linki doğru şekilde al

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
    anchor.href = popupMessageUrl; // Manuel olarak belirlediğiniz URL'yi kullan
    anchor.innerText = "Güncel URL"; // Metni Güncel URL olarak ayarla

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

            // Düğme metnini ve stilini değiştir
            button.innerText = (isOpen) ? '\u25BE Kapat' : '\u25B4 Aç';
            
            // Çubuğu tam genişlikte aç/kapat
            if (!isOpen) {
                node.style.width = "auto"; // Genişliği otomatik ayarla
                node.style.left = "0"; // Sol kenara hizala
                node.style.right = "0"; // Sağ kenara hizala
                node.style.bottom = "0";   // Sayfanın altına yapıştır
                node.style.padding = "0.5em"; // Yüksekliği küçült
                node.style.borderRadius = "0"; // Köşe yuvarlaklıklarını kaldır
            } else {
                node.style.width = "50%"; // Orijinal genişlik
                node.style.left = ""; // Sol kenar hizalamasını kaldır
                node.style.right = ""; // Sağ kenar hizalamasını kaldır
                node.style.bottom = "50%"; // Orijinal pozisyon
                node.style.padding = "2em"; // Orijinal padding
                node.style.borderRadius = "1em"; // Orijinal köşe yuvarlaklıkları
            }
        }
    }

    document.body.appendChild(node);
    button.focus();

    // "Esc" tuşuna basıldığında pop-up'ı kapat
    window.onkeydown = function(event) {
        var isCollapsed = node.classList.contains("outdated-collapsed");
        if (event.key === "Escape" && !isCollapsed) { // "Escape" tuşuna basıldıysa
            button.click(); // Butona tıklama işlemini tetikle
        }
    };
}
