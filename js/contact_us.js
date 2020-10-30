function printError(element, msg) {
    document.getElementById(element).innerHTML = msg;
}


function validateForm() {

    // Retrieving the values of form elements
    var name = document.getElementById("name").value;
    var email = document.getElementById("emailAddress").value;
    var feedback = document.getElementById("feedback").value;

    var nameErr = emailErr = feedbackErr = true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

        // Validate feedback
    if (feedback == "") {
        printError("feedbackErr", "Please enter some feedback or questions");
    } else {
        printError("feedbackErr", "");
        feedbackErr = false;
    }


    if (nameErr || emailErr == true || feedbackErr == true) {
        return false;
    } else {
        alert('You have submitted the form. Thank you for your feedback!')
    }
}