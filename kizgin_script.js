strongs.forEach(function(strong) {
    strong.addEventListener('mouseenter', function() {
        var tooltip = strong.querySelector('.tooltip');
        tooltip.style.visibility = 'visible'; // Tooltip'i göster
    });

    strong.addEventListener('mouseleave', function() {
        var tooltip = strong.querySelector('.tooltip');
        tooltip.style.visibility = 'hidden'; // Tooltip'i gizle
    });

    // Mobil için
    strong.addEventListener('touchstart', function() {
        var tooltip = strong.querySelector('.tooltip');
        tooltip.style.visibility = 'visible'; // Tooltip'i göster
    });

    strong.addEventListener('touchend', function() {
        var tooltip = strong.querySelector('.tooltip');
        tooltip.style.visibility = 'hidden'; // Tooltip'i gizle
    });
});
