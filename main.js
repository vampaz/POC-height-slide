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

            let stepsTop = [
                {transform: `translate3d(0, ${-accordionBodyH}px, 0)`},
                {transform: 'translate3d(0,0px,0px)'}
            ];

            let setpsHeight = [
                {height: elH + 'px'},
                {height: elH + accordionBodyH + 'px'}
            ];

            let config = {
                duration: duration,
                iterations: 1,
                fill: 'forwards',
                easing: 'ease-in',
                direction: invert ? 'reverse' : 'normal',
            };

            let animationT = accordionBody.animate(stepsTop, config);
            parent.animate(setpsHeight, config);

            if (!invert) {
                accordionBody.setAttribute('aria-expanded', 'true');
            }

            else {
                animationT.onfinish = function () {
                    accordionBody.setAttribute('aria-expanded', 'false');
                }
            }

        }

    }

})();
