document.addEventListener('DOMContentLoaded', () => {
    
    const paymentOptions = document.querySelectorAll('.payment-option');
    const cardForm = document.getElementById('card-form');
    const paypalForm = document.getElementById('paypal-form');
    const payButton = document.getElementById('pay-button');
    const paymentForm = document.getElementById('payment-form');
    const orderItems = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');

    
    loadOrderSummary();

    
    paymentOptions.forEach(option => {
        option.addEventListener('click', () => {
            
            paymentOptions.forEach(opt => opt.classList.remove('active'));

            
            option.classList.add('active');

            
            const radio = option.querySelector('input[type="radio"]');
            radio.checked = true;

            
            changePaymentMethod(option.dataset.type);
        });
    });

    
    function changePaymentMethod(type) {
        if (type === 'card') {
            
            cardForm.classList.remove('hidden');
            paypalForm.classList.add('hidden');

            
            payButton.textContent = 'Payer maintenant';

            
            setCardFieldsRequired(true);

        } else if (type === 'paypal') {
            
            cardForm.classList.add('hidden');
            paypalForm.classList.remove('hidden');

            
            payButton.textContent = 'Payer avec PayPal';

            
            setCardFieldsRequired(false);
        }
    }

    
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

    
    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const selectedPayment = document.querySelector('input[name="payment-type"]:checked').value;

        if (selectedPayment === 'card') {
            
            const cardName = document.getElementById('card-name').value.trim();
            const cardNumber = document.getElementById('card-number').value.trim();
            const expiry = document.getElementById('expiry').value.trim();
            const cvv = document.getElementById('cvv').value.trim();

            if (!cardName || !cardNumber || !expiry || !cvv) {
                alert('Veuillez remplir tous les champs de la carte bancaire.');
                return;
            }

            
            const cleanCardNumber = cardNumber.replace(/\s/g, '');
            if (cleanCardNumber.length < 13 || cleanCardNumber.length > 19 || !/^\d+$/.test(cleanCardNumber)) {
                alert('Numéro de carte invalide.');
                return;
            }

            
            if (!/^\d{2}\/\d{4}$/.test(expiry)) {
                alert('Format de date d\'expiration invalide (MM/AAAA).');
                return;
            }

            
            alert('Paiement par carte bancaire traité avec succès !');

            
            localStorage.removeItem('cart');

            
            window.location.href = 'confirmation.html';

        } else if (selectedPayment === 'paypal') {
            
            alert('Redirection vers PayPal...');

            
            localStorage.removeItem('cart');

            
            
            window.location.href = 'confirmation.html';
        }
    });

    
    document.getElementById('card-number').addEventListener('input', (e) => {
        let value = e.target.value.replace(/\s/g, '');
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
        e.target.value = value;
    });

    
    document.getElementById('expiry').addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 6);
        }
        e.target.value = value;
    });

    
    document.getElementById('cvv').addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '');
    });

    
    changePaymentMethod('card');

    
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
                    <img src="${item.image || 'https:
                         class="order-item-image" 
                         alt="${item.name}"
                         onerror="this.src='https:
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