document.addEventListener('DOMContentLoaded', () => {
    // Éléments DOM
    const paymentOptions = document.querySelectorAll('.payment-option');
    const cardForm = document.getElementById('card-form');
    const paypalForm = document.getElementById('paypal-form');
    const payButton = document.getElementById('pay-button');
    const paymentForm = document.getElementById('payment-form');
    const orderItems = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');

    // Charger et afficher le résumé de commande
    loadOrderSummary();

    // Gestionnaire de sélection des méthodes de paiement
    paymentOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Retirer la classe active de toutes les options
            paymentOptions.forEach(opt => opt.classList.remove('active'));

            // Ajouter la classe active à l'option sélectionnée
            option.classList.add('active');

            // Cocher le radio button correspondant
            const radio = option.querySelector('input[type="radio"]');
            radio.checked = true;

            // Changer la méthode de paiement
            changePaymentMethod(option.dataset.type);
        });
    });

    // Fonction pour changer la méthode de paiement
    function changePaymentMethod(type) {
        if (type === 'card') {
            // Afficher le formulaire carte bancaire
            cardForm.classList.remove('hidden');
            paypalForm.classList.add('hidden');

            // Changer le texte du bouton
            payButton.textContent = 'Payer maintenant';

            // Rendre les champs carte requis
            setCardFieldsRequired(true);

        } else if (type === 'paypal') {
            // Afficher le formulaire PayPal
            cardForm.classList.add('hidden');
            paypalForm.classList.remove('hidden');

            // Changer le texte du bouton
            payButton.textContent = 'Payer avec PayPal';

            // Rendre les champs carte non requis
            setCardFieldsRequired(false);
        }
    }

    // Fonction pour gérer les champs requis de la carte
    function setCardFieldsRequired(required) {
        const cardFields = ['card-name', 'card-number', 'expiry', 'cvv'];
        cardFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (required) {
                field.setAttribute('required', 'required');
            } else {
                field.removeAttribute('required');
            }
        });
    }

    // Gestionnaire de soumission du formulaire
    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const selectedPayment = document.querySelector('input[name="payment-type"]:checked').value;

        if (selectedPayment === 'card') {
            // Validation des champs carte bancaire
            const cardName = document.getElementById('card-name').value.trim();
            const cardNumber = document.getElementById('card-number').value.trim();
            const expiry = document.getElementById('expiry').value.trim();
            const cvv = document.getElementById('cvv').value.trim();

            if (!cardName || !cardNumber || !expiry || !cvv) {
                alert('Veuillez remplir tous les champs de la carte bancaire.');
                return;
            }

            // Validation basique du numéro de carte
            const cleanCardNumber = cardNumber.replace(/\s/g, '');
            if (cleanCardNumber.length < 13 || cleanCardNumber.length > 19 || !/^\d+$/.test(cleanCardNumber)) {
                alert('Numéro de carte invalide.');
                return;
            }

            // Validation de la date d'expiration
            if (!/^\d{2}\/\d{4}$/.test(expiry)) {
                alert('Format de date d\'expiration invalide (MM/AAAA).');
                return;
            }

            // Ici vous pouvez ajouter la logique de paiement par carte
            alert('Paiement par carte bancaire traité avec succès !');

            // Vider le panier après paiement réussi
            localStorage.removeItem('cart');

            // Redirection vers page de confirmation
            window.location.href = 'confirmation.html';

        } else if (selectedPayment === 'paypal') {
            // Redirection vers PayPal (simulation)
            alert('Redirection vers PayPal...');

            // Vider le panier après paiement réussi
            localStorage.removeItem('cart');

            // window.location.href = 'https://www.paypal.com'; // URL PayPal réelle
            // Pour la démo, redirection vers confirmation
            window.location.href = 'confirmation.html';
        }
    });

    // Formatage automatique du numéro de carte
    document.getElementById('card-number').addEventListener('input', (e) => {
        let value = e.target.value.replace(/\s/g, '');
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
        e.target.value = value;
    });

    // Formatage automatique de la date d'expiration
    document.getElementById('expiry').addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 6);
        }
        e.target.value = value;
    });

    // Validation du CVV
    document.getElementById('cvv').addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '');
    });

    // Initialisation : s'assurer que la carte bancaire est sélectionnée par défaut
    changePaymentMethod('card');

    // Fonction pour charger et afficher le résumé de commande
    function loadOrderSummary() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            orderItems.innerHTML = '<p style="text-align: center; color: #666;">Votre commande est vide</p>';
            orderTotal.innerHTML = '';
            return;
        }

        let total = 0;
        let itemsHtml = '';

        cart.forEach(item => {
            const quantity = item.quantity || 1;
            const itemTotal = item.price * quantity;
            total += itemTotal;

            itemsHtml += `
                <div class="order-item">
                    <img src="${item.image || 'https://picsum.photos/id/1074/600/400'}" 
                         class="order-item-image" 
                         alt="${item.name}"
                         onerror="this.src='https://picsum.photos/id/1074/600/400'">
                    <div class="order-item-info">
                        <div class="order-item-name">${item.name}</div>
                        <div class="order-item-details">
                            <span class="order-item-color">
                                <span class="color-dot" style="background: ${item.colorHex || '#000000'}"></span>
                                ${item.colorName || 'Non spécifiée'}
                            </span>
                            <span class="order-item-quantity">Qté: ${quantity}</span>
                        </div>
                    </div>
                    <div class="order-item-price">${itemTotal.toLocaleString('fr-FR')} €</div>
                </div>
            `;
        });

        orderItems.innerHTML = itemsHtml;

        orderTotal.innerHTML = `
            <div class="total-row">
                <span>Sous-total</span>
                <span>${total.toLocaleString('fr-FR')} €</span>
            </div>
            <div class="total-row">
                <span>Livraison</span>
                <span>Gratuite</span>
            </div>
            <div class="total-row total">
                <span>Total TTC</span>
                <span>${total.toLocaleString('fr-FR')} €</span>
            </div>
        `;
    }
});