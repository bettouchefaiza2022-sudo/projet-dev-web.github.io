import { registerUser } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const statusMessage = document.getElementById('status-message');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Validation RegEx
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showStatus("Format d'email invalide.", "error-text");
            return;
        }

        if (password.length < 6) {
            showStatus("Le mot de passe doit faire au moins 6 caractères.", "error-text");
            return;
        }

        if (password !== confirmPassword) {
            showStatus("Les mots de passe ne correspondent pas.", "error-text");
            return;
        }

        const result = registerUser({ name, email, password });
        if (result.success) {
            showStatus(result.message, "success-text");
            setTimeout(() => {
                window.location.href = 'connexion.html';
            }, 1500);
        } else {
            showStatus(result.message, "error-text");
        }
    });

    function showStatus(message, className) {
        statusMessage.textContent = message;
        statusMessage.className = className;
        statusMessage.classList.remove('hidden');
    }
});
