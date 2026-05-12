document.addEventListener('DOMContentLoaded', () => {

    const cartItemsSection = document.getElementById('cart-items-section');
    const cartCountLabel   = document.getElementById('cart-count-label');
    const itemCountEl      = document.getElementById('item-count');
    const subtotalEl       = document.getElementById('subtotal');
    const totalEl          = document.getElementById('total');
    const toast            = document.getElementById('toast');
    const clearBtn         = document.getElementById('clear-cart-btn');
    const checkoutBtn      = document.getElementById('checkout-btn');

    function getCart() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }

    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2800);
    }

    function renderCart() {
        const cart = getCart();

        if (cart.length === 0) {
            cartCountLabel.textContent = "Votre panier est vide";
            cartItemsSection.innerHTML = `
                <div style="text-align:center; padding:80px 20px; background:white; border-radius:20px;">
                    <h2>Aucun véhicule dans votre panier</h2>
                    <p style="margin:15px 0 25px;">Ajoutez des voitures depuis notre catalogue.</p>
                    <a href="produits.html" style="color:var(--primary); font-weight:600;">Découvrir nos voitures →</a>
                </div>`;
            itemCountEl.textContent = 0;
            subtotalEl.textContent = "0 €";
            totalEl.textContent = "0 €";
            checkoutBtn.disabled = true;
            return;
        }

        let subtotal = 0;
        cartItemsSection.innerHTML = '';

        cart.forEach(item => {
            const qty = item.quantity || 1;
            const itemTotal = item.price * qty;
            subtotal += itemTotal;

            const div = document.createElement('div');
            div.className = 'cart-item';

            div.innerHTML = `
                <img src="${item.image || 'https://picsum.photos/id/1074/600/400'}" 
                     class="cart-item-img" 
                     alt="${item.name}"
                     onerror="this.src='https://picsum.photos/id/1074/600/400'">

                <div class="cart-item-info">
                    <div class="cart-item-category">${item.category || 'Voiture'}</div>
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-color">
                        <span class="color-dot" style="background: ${item.colorHex || '#000000'}"></span>
                        <span>${item.colorName || 'Non spécifiée'}</span>
                    </div>
                </div>

                <div style="text-align:right;">
                    <div class="cart-item-price">${itemTotal.toLocaleString('fr-FR')} €</div>
                    <small>Quantité : ${qty}</small><br>
                    <button class="remove-item-btn" data-id="${item.id}">Retirer</button>
                </div>
            `;

            cartItemsSection.appendChild(div);
        });

        // 👉 Bouton retirer
        document.querySelectorAll('.remove-item-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        let cart = getCart();

        // 👉 supprimer UNE SEULE occurrence
        const index = cart.findIndex(item => item.id == id);

        if (index !== -1) {
            cart.splice(index, 1);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        showToast("Produit retiré du panier");
    });
});

        cartCountLabel.textContent = `${cart.length} véhicule${cart.length > 1 ? 's' : ''} dans votre panier`;
        itemCountEl.textContent = cart.length;
        subtotalEl.textContent = subtotal.toLocaleString('fr-FR') + " €";
        totalEl.textContent = subtotal.toLocaleString('fr-FR') + " €";
        checkoutBtn.disabled = false;
    }

    // ===================== CHECKOUT =====================
    checkoutBtn.addEventListener('click', () => {
        const cart = getCart();
        
        if (cart.length === 0) {
            showToast("Votre panier est vide !");
            return;
        }

        if (!localStorage.getItem('currentUser')) {
            showToast("Vous devez vous connecter avant de passer la commande.");
            localStorage.setItem('fromCart', 'true');
            setTimeout(() => {
                window.location.href = "../content/connexion.html";
            }, 800);
            return;
        }

        window.location.href = "paiement.html";
    });

    // ===================== VIDER PANIER =====================
    clearBtn.addEventListener('click', () => {
        if (confirm("Voulez-vous vraiment vider tout le panier ?")) {
            localStorage.removeItem('cart');
            renderCart();
            showToast("Panier vidé avec succès");
        }
    });

    // Initialisation
    renderCart();
});