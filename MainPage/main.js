document.addEventListener('DOMContentLoaded', function () {
    var accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(function (header) {
        header.addEventListener('click', function () {
            var accordionItem = this.parentElement;
            var accordionContent = accordionItem.querySelector('.accordion-content');

            accordionContent.classList.toggle('active');
        });
    });
});