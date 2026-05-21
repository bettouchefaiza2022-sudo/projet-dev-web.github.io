document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.getElementById('login-form');
    const passwordInput = document.getElementById('password');
    const showPasswordCheck = document.getElementById('showPasswordCheck');

    
    if (showPasswordCheck && passwordInput) {
        showPasswordCheck.addEventListener('change', () => {
            passwordInput.type = showPasswordCheck.checked ? 'text' : 'password';
        });
    }

    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('email').value.trim();
            const password = passwordInput.value.trim();

            
            if (email !== "" && password !== "") {

                
                localStorage.setItem('currentUser', JSON.stringify({
                    email: email,
                    name: email.split('@')[0] || "Utilisateur"
                }));

                
                const notification = document.createElement('div');
                notification.className = 'success-notification';
                notification.innerHTML = `
                    ✅ Connexion réussie !<br>
                `;
                document.body.appendChild(notification);
                
                setTimeout(() => {
               const fromCart = localStorage.getItem("fromCart");
                  if (fromCart === "true") {
                     localStorage.removeItem("fromCart");
                     window.location.href = "../content/paiement.html";
                } else {
                      window.location.href = "../content/produits.html";
                }
                }, 1800);

            } else {
                alert("Veuillez remplir tous les champs");
            }
        });
    }
});