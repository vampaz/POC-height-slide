(function () {

    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('accordion').addEventListener('click', function (event) {
            slideY(event.target);
        });
    });

    function slideY(el) {
        const duration = 300;

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
                accordionBody.style.cssText = `height:${accordionBodyH}px;display:block;position:relative;top:-${accordionBodyH}px`;
                parent.style.cssText = `height:${elH}px;position:relative;`;

                setTimeout(function () {
                    parent.style.cssText = `height:${elH + accordionBodyH}px;position:relative;`;
                    accordionBody.style.top = 0;
                }, 0);
            } else {
                parent.style.cssText = `height:${elH}px`;
                accordionBody.style.top = `-${accordionBodyH}px`;
                setTimeout(function () {
                    accordionBody.setAttribute("aria-expanded", false);
                }, duration);
            }

        }
    }

})();
