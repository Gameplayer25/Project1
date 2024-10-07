document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedbackElement = document.getElementById('feedback');

    feedbackElement.style.display = 'none';

    if (!name) {
        feedbackElement.innerText = 'Name is required.';
        feedbackElement.style.color = 'red';
        feedbackElement.style.display = 'block';
        event.preventDefault();
    } else if (!email) {
        feedbackElement.innerText = 'Email is required.';
        feedbackElement.style.color = 'red';
        feedbackElement.style.display = 'block';
        event.preventDefault();
    } else if (!message) {
        feedbackElement.innerText = 'Message is required.';
        feedbackElement.style.color = 'red';
        feedbackElement.style.display = 'block';
        event.preventDefault();
    } else if (!validateEmail(email)) {
        feedbackElement.innerText = 'Please enter a valid email address.';
        feedbackElement.style.color = 'red';
        feedbackElement.style.display = 'block';
        event.preventDefault();
    } else {
        feedbackElement.innerText = 'Form submitted successfully!';
        feedbackElement.style.color = 'green';
        feedbackElement.style.display = 'block';
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.getElementById('toggleMessage').addEventListener('click', function() {
    const messageElement = document.getElementById('extraMessage');
    messageElement.style.display = (messageElement.style.display === 'none' || messageElement.style.display === '') ? 'block' : 'none';
});
