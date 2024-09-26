// Toggle between login and sign-up forms
const signupLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');
const signupContainer = document.getElementById('signup-container');
const authContainer = document.querySelector('.auth-container');

signupLink.addEventListener('click', function(e) {
    e.preventDefault();
    authContainer.style.display = 'none';
    signupContainer.style.display = 'flex';
});

loginLink.addEventListener('click', function(e) {
    e.preventDefault();
    signupContainer.style.display = 'none';
    authContainer.style.display = 'flex';
});
