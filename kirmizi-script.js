document.addEventListener("DOMContentLoaded", function() {
    // mandoteam.blogspot.com
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    var popup = document.querySelector('.outdated-warning');
    var expandedPopup;

    // mandoteam.blogspot.com
    popup.classList.remove('hidden');
    overlay.classList.remove('hidden');

    // mandoteam.blogspot.com
    popup.querySelector('button').textContent = '▾ collapse';
    popup.querySelector('button').onclick = function() {
		// mandoteam.blogspot.com
        popup.classList.add('hidden');
        overlay.classList.add('hidden');

        // mandoteam.blogspot.com
        expandedPopup = document.createElement('div');
        expandedPopup.className = 'outdated-expanded';

		// mandoteam.blogspot.com
        var originalContent = popup.querySelector('span').innerHTML; 
        expandedPopup.innerHTML = `
            <span>${originalContent}</span>
            <button>▴ expand</button>
        `;
        document.body.appendChild(expandedPopup);

		// mandoteam.blogspot.com
        expandedPopup.querySelector('button').onclick = function() {
		// mandoteam.blogspot.com
            expandedPopup.classList.add('hidden');

		// mandoteam.blogspot.com
            popup.classList.remove('hidden');
            overlay.classList.remove('hidden');
        };
    };
});
