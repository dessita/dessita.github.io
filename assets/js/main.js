//the jquery popper and bootstrap already loaded
$(document).ready(function () {

    var selector = {
        navbar: '*[data-role="change-color"]'
    }

    /*initialize();
    function initialize() {
    };*/

    $("body").on("blur", $("input"), function () {

        $("input")[0].checkValidity();
    });

    var $feedback = $('#feedback');
    var $contactForm = $('#contact-form');
    $contactForm.submit(function (e) {

        e.preventDefault();
        e.stopImmediatePropagation();
        $.ajax({
            url: "https://formspree.io/f/dessita@gmail.com", //don't submit until life
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            beforeSend: function () {

                $feedback.html('<div class="alert alert-info" role="alert">Sending message…</div>');
            },
            success: function (data) {

                document.location = "/thankyou/";
            },
            error: function (err) {
                console.log('error' + err.message);
                $contactForm[0].checkValidity();
                $feedback.html('<div class="alert alert-danger" role="alert">Ops, there was an error.</div>');
            }
        });

        return false;
    });


});




