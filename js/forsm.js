// Get the form element
const form = document.getElementById('contactForm');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Perform form validation
    if(validateForm()) {
        // If form is valid, submit it
        form.submit();
    }
});

// Function to validate the form
function validateForm() {
    // Get form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const location = document.getElementById('location').value.trim();
    const phone = document.getElementById('phone').value.trim();
    
    // Check if name is empty
    if(name === '') {
        alert('Please enter your name.');
        return false;
    }

    // Check if email is empty or not valid
    if(email === '') {
        alert('Please enter your email address.');
        return false;
    } else if(!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Check if message is empty
    if(message === '') {
        alert('Please enter your message.');
        return false;
    }

    // Check if location is empty
    if(location === '') {
        alert('Please select a location.');
        return false;
    }

    // Check if phone number is not empty and valid
    if(phone !== '' && !validatePhone(phone)) {
        alert('Please enter a valid phone number.');
        return false;
    }

    // If all validations pass, return true
    return true;
}

// Function to validate email address format
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Function to validate phone number format
function validatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(phone);
}
