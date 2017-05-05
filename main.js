(function () {

    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('accordion').addEventListener('click', function (event) {
            slideY(event.target);
        });
    });

    function slideY(el) {
        const duration = 200;

        let parent = undefined;
        let accordionBody = undefined;

        if (el && el.getAttribute('role') === 'tab') {
            parent = el.parentNode;
            accordionBody = el.nextElementSibling;
            playAnimation(accordionBody.getAttribute('aria-expanded') === 'true');
        }

        function playAnimation(invert) {
            let elH = el.offsetHeight;

            accordionBody.classList.add('preRender');
            let accordionBodyH = accordionBody.offsetHeight - 3;
            accordionBody.classList.remove('preRender');

            if (!invert) {
                accordionBody.setAttribute('aria-expanded', 'true');
                accordionBody.style.cssText = `height:${accordionBodyH}px;transform: translate3d(0,-${accordionBodyH}px,0)`;
                parent.style.cssText = `height:${elH}px;`;

                setTimeout(function () {
                    accordionBody.style.transform = 'translate3d(0,0,0)';
                    parent.style.cssText = `height:${elH + accordionBodyH}px;`;
                }, 100);
            } else {
                parent.style.cssText = `height:${elH}px`;
                accordionBody.style.transform = `translate3d(0,-${accordionBodyH}px,0)`
                setTimeout(function () {
                    accordionBody.setAttribute("aria-expanded", false);
                }, duration);
            }

        }
    }

})();
