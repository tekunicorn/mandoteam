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
    strong.addEventListener('mouseenter', function() {
        if (window.innerWidth > 768) { // Sadece masaüstü için
            var tooltip = strong.querySelector('.tooltip');
            tooltip.style.visibility = 'visible'; // Tooltip'i göster
        }
    });

    strong.addEventListener('mouseleave', function() {
        if (window.innerWidth > 768) { // Sadece masaüstü için
            var tooltip = strong.querySelector('.tooltip');
            tooltip.style.visibility = 'hidden'; // Tooltip'i gizle
        }
    });

    strong.addEventListener('touchstart', function() {
        if (window.innerWidth <= 768) {
            var tooltip = strong.querySelector('.tooltip');
            tooltip.style.visibility = 'visible'; // Tooltip'i göster
        }
    });

    strong.addEventListener('touchend', function() {
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
