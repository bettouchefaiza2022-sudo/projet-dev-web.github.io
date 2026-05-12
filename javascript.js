import { getCurrentUser, logout } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
    const user = getCurrentUser();
    const authNav = document.getElementById('auth-nav');
    const userNav = document.getElementById('user-nav');
    const userName = document.getElementById('user-name');
    const logoutBtn = document.getElementById('logout-btn');

    if (user) {
        authNav.classList.add('hidden');
        userNav.classList.remove('hidden');
        userName.textContent = `Bonjour, ${user.name}`;
    }

    logoutBtn?.addEventListener('click', () => {
        logout();
    });
});
