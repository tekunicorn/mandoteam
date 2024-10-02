document.getElementById('showPopup').addEventListener('click', function() {
    document.getElementById('popup').classList.add('active');
    document.getElementById('showPopup').style.display = 'none';  // Butonu gizle
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').classList.remove('active');
    document.getElementById('showPopup').style.display = 'block';  // Butonu tekrar göster
});

var strongs = document.querySelectorAll('strong');

strongs.forEach(function(strong) {
    if (window.innerWidth > 768) { // Sadece masaüstü için
        strong.addEventListener('mouseenter', function() {
            var tooltip = strong.querySelector('.tooltip');
            tooltip.style.visibility = 'visible'; // Tooltip'i göster
        });

        strong.addEventListener('mouseleave', function() {
            var tooltip = strong.querySelector('.tooltip');
            tooltip.style.visibility = 'hidden'; // Tooltip'i gizle
        });
    }

    // Mobil için touch olayları eklemeden önce kontrol et
    strong.addEventListener('touchstart', function(event) {
        if (window.innerWidth <= 768) {
            event.preventDefault(); // Varsayılan davranışı engelle
        }
    });

    strong.addEventListener('touchend', function(event) {
        if (window.innerWidth <= 768) {
            var tooltip = strong.querySelector('.tooltip');
            tooltip.style.visibility = 'hidden'; // Tooltip'i gizle
        }
    });
});

document.addEventListener('click', function(event) {
    var popup = document.getElementById('popup');
    if (!popup.contains(event.target) && !event.target.matches('#showPopup')) {
        event.stopPropagation();
    }
});
