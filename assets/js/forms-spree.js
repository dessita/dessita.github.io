
    window.addEventListener("DOMContentLoaded", function () {

        // get the form elements defined in your form HTML above

        var form = document.getElementById("contact-form");
        var button = document.getElementById("my-form-button");
        var status = document.getElementById("feedback");

        // Success and Error functions for after the form is submitted

        function success() {
            form.reset();
            button.style = "display: none ";
            form.style = "display:none"
            status.innerHTML = " <p >Thank You for reaching out! </p>\n" +
                "\n" +
                "                <a class=\"btn btn-primary mt-5 btn-lg \" href=\"/\"> Back to Homepage</a>";

        }

        function error(xhr_status, xhr_response, xhr_type) {
            status.innerHTML = "Oops! There was a problem.";
            console.log("error " + xhr_status);
            console.log("error " + xhr_response);
            console.log("error " + xhr_type);
        }

        // handle the form submission event
        if(form) {
            form.addEventListener("submit", function (ev) {
                ev.preventDefault();
                var data = new FormData(form);
                ajax(form.method, form.action, data, success, error);
            });
        }
    });

// helper function for sending an AJAX request

    function ajax(method, url, data, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                success(xhr.response, xhr.responseType);
            } else {
                error(xhr.status, xhr.response, xhr.responseType);
            }
        };
        xhr.send(data);
    }
