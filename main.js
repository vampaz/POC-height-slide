(function () {
    document.addEventListener("DOMContentLoaded", function () {
        document
            .getElementById("accordion")
            .addEventListener("click", function (event) {
                var el = event.target;

                if (el.getAttribute("role") === "tab") {

                    accordionBody = el.nextElementSibling;

                    if (accordionBody.getAttribute("aria-expanded") === "false") {
                        play(el);
                        accordionBody.setAttribute("aria-expanded", true);
                    }

                    else {
                        reverse(el);

                        setTimeout(function () {
                            accordionBody.setAttribute("aria-expanded", false);
                        }, 400);
                    }

                }
            });
    });

    function play(el) {
        console.log(el);

        var parent = el.parentElement;
        var elH = el.offsetHeight;
        parent.style.cssText = `height:${elH}px;`;

// Get the content height
        var accordionBody = el.nextElementSibling;
        accordionBody.classList.add('preRender');
        var accordionBodyH = accordionBody.offsetHeight;
        accordionBody.classList.remove('preRender');

//set parent height
        accordionBody.style.cssText = `height:${accordionBodyH}px;display:block;position:relative;top:-${accordionBodyH}px`;
        parent.style.cssText = `height:${elH}px;position:relative;`;
        parent.style.cssText = `height:${elH + accordionBodyH}px;position:relative;`;

        setTimeout(function () {
            accordionBody.style.top = 0;
        }, 0);

    }

    function reverse(el) {

        var parent = el.parentElement;
        var elH = el.offsetHeight;
        parent.style.cssText = `height:${elH}px`;

// Get the content height
        var accordionBody = el.nextElementSibling;
        var accordionBodyH = accordionBody.offsetHeight;

//set parent height
        accordionBody.style.top = `-${accordionBodyH}px`;

    }

})();
