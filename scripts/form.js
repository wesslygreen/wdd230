document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('simpleForm');
    const password = document.getElementById('password');
    const passwordConfirm = document.getElementById('passwordConfirm');
    const rating = document.getElementById('rating');
    const ratingValue = document.getElementById('ratingValue');
 
    // Update rating value display
    rating.addEventListener('input', function() {
        ratingValue.textContent = rating.value;
    });
 
    // Form submission validation
    form.addEventListener('submit', function(e) {
        if (password.value !== passwordConfirm.value) {
            e.preventDefault();
            alert('Passwords do not match. Please try again.');
            password.focus();
            password.value = '';
            passwordConfirm.value = '';
        }
    });
});