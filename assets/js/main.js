$(document).ready(function () {

    // Smooth scroll

    $(".nav-link").click(function (event) {
        event.preventDefault();

        var gato = this.hash;

        $("html").animate(
            {
                scrollTop: $(gato).offset().top - 85,
            },
            800
        );
    });
});

// Tooltip
$('[data-toggle="tooltip"]').tooltip()

// Popover
$('[data-toggle="popover"]').popover()

