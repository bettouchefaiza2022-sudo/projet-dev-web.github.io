const cars = [
{ id: 1, name: "Mercedes-Benz S 580", price: 135000 },
{ id: 2, name: "BMW Série 7 760i", price: 145000 },
{ id: 3, name: "Audi A8 60 TFSI", price: 115000 },
{ id: 4, name: "Mercedes-Maybach S 680", price: 250000 },
{ id: 5, name: "Rolls-Royce Ghost", price: 320000 },
{ id: 6, name: "Bentley Flying Spur", price: 220000 },
{ id: 7, name: "Porsche Panamera Turbo S", price: 195000 },
{ id: 8, name: "BMW i7 M70", price: 165000 },
{ id: 9, name: "Mercedes EQS 450+", price: 115000 },
{ id: 10, name: "Lucid Air Sapphire", price: 220000 },
{ id: 11, name: "Audi A8 L Horch", price: 180000 },
{ id: 12, name: "Genesis G90", price: 95000 },
{ id: 13, name: "Maserati Quattroporte Trofeo", price: 165000 },
{ id: 14, name: "Lexus LS 500h", price: 115000 },
{ id: 15, name: "Cadillac Celestiq", price: 340000 },
{ id: 16, name: "BMW Série 5 540i", price: 75000 },
{ id: 17, name: "Mercedes E 450 4MATIC", price: 85000 },
{ id: 18, name: "Audi S8", price: 135000 },
{ id: 19, name: "Rolls-Royce Phantom VIII", price: 550000 },
{ id: 20, name: "Bentley Mulsanne (occasion récente)", price: 280000 },
{ id: 21, name: "Porsche Taycan Turbo GT", price: 240000 },
{ id: 22, name: "Mercedes-AMG GT 63 S E Performance", price: 180000 },
{ id: 23, name: "BMW M760e", price: 155000 },
{ id: 24, name: "Audi RS e-tron GT", price: 150000 },
{ id: 25, name: "Lucid Air Grand Touring", price: 135000 },
{ id: 26, name: "Range Rover Autobiography", price: 180000 },
{ id: 27, name: "Mercedes GLS 600 Maybach", price: 220000 },
{ id: 28, name: "BMW X7 M60i", price: 145000 },
{ id: 29, name: "Audi Q8 55 TFSI", price: 105000 },
{ id: 30, name: "Porsche Cayenne Turbo GT", price: 195000 },
{ id: 31, name: "Bentley Bentayga S", price: 230000 },
{ id: 32, name: "Rolls-Royce Cullinan", price: 380000 },
{ id: 33, name: "Mercedes G 500", price: 165000 },
{ id: 34, name: "Lamborghini Urus Performante", price: 280000 },
{ id: 35, name: "Ferrari Purosangue", price: 390000 },
{ id: 36, name: "Aston Martin DBX707", price: 220000 },
{ id: 37, name: "Maserati Levante Trofeo", price: 160000 },
{ id: 38, name: "BMW iX M60", price: 135000 },
{ id: 39, name: "Mercedes EQS SUV", price: 130000 },
{ id: 40, name: "Audi Q8 e-tron", price: 95000 },
{ id: 41, name: "Porsche Macan Electric", price: 95000 },
{ id: 42, name: "Lotus Eletre", price: 110000 },
{ id: 43, name: "Volvo EX90", price: 105000 },
{ id: 44, name: "Genesis GV80", price: 85000 },
{ id: 45, name: "Land Rover Defender 130 V8", price: 130000 },
{ id: 46, name: "Jeep Grand Wagoneer", price: 120000 },
{ id: 47, name: "Cadillac Escalade V", price: 170000 },
{ id: 48, name: "Lincoln Navigator", price: 110000 },
{ id: 49, name: "Range Rover Sport SV", price: 160000 },
{ id: 50, name: "Mercedes GLE 450", price: 95000 },
{ id: 51, name: "BMW X5 M Competition", price: 140000 },
{ id: 52, name: "Audi SQ7", price: 115000 },
{ id: 53, name: "Porsche Cayenne E-Hybrid", price: 130000 },
{ id: 54, name: "Bentley Bentayga Hybrid", price: 210000 },
{ id: 55, name: "Rolls-Royce Spectre", price: 420000 },
{ id: 56, name: "Porsche 911 Turbo S", price: 210000 },
{ id: 57, name: "Ferrari 296 GTB", price: 320000 },
{ id: 58, name: "Lamborghini Huracán Tecnica", price: 280000 },
{ id: 59, name: "McLaren 750S", price: 280000 },
{ id: 60, name: "Aston Martin Vantage", price: 160000 },
{ id: 61, name: "Mercedes-AMG GT 63", price: 180000 },
{ id: 62, name: "BMW M8 Competition", price: 170000 },
{ id: 63, name: "Audi RS7 Sportback", price: 135000 },
{ id: 64, name: "Maserati MC20", price: 230000 },
{ id: 65, name: "Lotus Emira", price: 95000 },
{ id: 66, name: "Alpine A110", price: 75000 },
{ id: 67, name: "Porsche 718 Cayman GT4 RS", price: 140000 },
{ id: 68, name: "Ferrari Roma", price: 220000 },
{ id: 69, name: "Bentley Continental GT Speed", price: 250000 },
{ id: 70, name: "Aston Martin DB12", price: 230000 },
{ id: 71, name: "Maserati GranTurismo Folgore", price: 200000 },
{ id: 72, name: "Porsche Taycan Turbo S", price: 200000 },
{ id: 73, name: "Rimac Nevera", price: 2000000 },
{ id: 74, name: "Lucid Air Sapphire", price: 220000 },
{ id: 75, name: "Tesla Model S Plaid", price: 95000 },
{ id: 76, name: "BMW M5 CS", price: 145000 },
{ id: 77, name: "Mercedes-AMG E 63 S", price: 160000 },
{ id: 78, name: "Audi RS6 Avant", price: 130000 },
{ id: 79, name: "Ferrari SF90 Stradale", price: 450000 },
{ id: 80, name: "Lamborghini Revuelto", price: 600000 },
{ id: 81, name: "Rolls-Royce Phantom", price: 550000 },
{ id: 82, name: "Rolls-Royce Cullinan Black Badge", price: 450000 },
{ id: 83, name: "Bentley Bacalar", price: 1800000 },
{ id: 84, name: "Bugatti Tourbillon", price: 4000000 },
{ id: 85, name: "Koenigsegg Gemera", price: 1800000 },
{ id: 86, name: "Pagani Huayra", price: 3000000 },
{ id: 87, name: "Ferrari Purosangue", price: 390000 },
{ id: 88, name: "Aston Martin Valhalla", price: 800000 },
{ id: 89, name: "Mercedes-Maybach GLS 600", price: 220000 },
{ id: 90, name: "Bentley Flying Spur Mulliner", price: 280000 },
{ id: 91, name: "Rolls-Royce Spectre", price: 420000 },
{ id: 92, name: "Lucid Gravity", price: 110000 },
{ id: 93, name: "Rivian R1S", price: 95000 },
{ id: 94, name: "Polestar 4", price: 85000 },
{ id: 95, name: "Zeekr 001", price: 65000 },
{ id: 96, name: "NIO ET7", price: 85000 },
{ id: 97, name: "Hongqi E-HS9", price: 90000 },
{ id: 98, name: "Genesis Electrified G80", price: 75000 },
{ id: 99, name: "Tesla Model X Plaid", price: 115000 },
{ id: 100, name: "Porsche Cayenne Turbo E-Hybrid", price: 190000 }
];
let cart = [];
let selectedCar = null;   // Voiture actuellement sélectionnée dans la recherche

function loadCart() {
    const saved = localStorage.getItem('cart');
    if (saved) cart = JSON.parse(saved);
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// ==================== RECHERCHE ====================
function setupSearch() {
    const searchInput = document.getElementById('search-voiture');
    const resultsContainer = document.getElementById('search-results');

    searchInput.addEventListener('input', () => {
        const term = searchInput.value.toLowerCase().trim();
        resultsContainer.innerHTML = '';

        if (term.length < 1) {
            resultsContainer.classList.remove('show');
            selectedCar = null;
            return;
        }

        const filtered = cars.filter(car => car.name.toLowerCase().includes(term));

        if (filtered.length === 0) {
            resultsContainer.innerHTML = `<div>Aucune voiture trouvée</div>`;
        } else {
            filtered.forEach(car => {
                const div = document.createElement('div');
                div.textContent = `${car.name} - ${car.price.toLocaleString('fr-FR')} €`;
                div.dataset.id = car.id;
                resultsContainer.appendChild(div);
            });
        }
        resultsContainer.classList.add('show');
    });

    // Clique sur une suggestion → sélectionne seulement (ne ajoute pas encore)
    resultsContainer.addEventListener('click', (e) => {
        const div = e.target.closest('div');
        if (!div || !div.dataset.id) return;

        const carId = parseInt(div.dataset.id);
        selectedCar = cars.find(c => c.id === carId);

        if (selectedCar) {
            searchInput.value = selectedCar.name;
            resultsContainer.classList.remove('show');
        }
    });
}

// ==================== AJOUT AU PANIER ====================
document.getElementById('btn-ajouter-rapide').addEventListener('click', () => {
    const searchInput = document.getElementById('search-voiture');
    const couleur = document.getElementById('couleur').value;

    if (!selectedCar && searchInput.value.trim() !== "") {
        // Recherche manuelle si pas de sélection
        selectedCar = cars.find(car => 
            car.name.toLowerCase() === searchInput.value.toLowerCase().trim()
        );
    }

    if (!selectedCar) {
        alert("Veuillez sélectionner une voiture.");
        return;
    }

    if (!couleur) {
        alert("Veuillez choisir une couleur.");
        return;
    }

    const existing = cart.find(item => item.id === selectedCar.id);

    if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
    } else {
        cart.push({
            ...selectedCar,
            couleur: couleur,
            quantity: 1
        });
    }

    saveCart();
    displayCart();

    // Réinitialisation
    searchInput.value = '';
    document.getElementById('couleur').value = '';
    selectedCar = null;

    alert("Voiture ajoutée au panier avec succès !");
});

// ==================== AFFICHAGE PANIER & FORMULAIRE (inchangé) ====================
function displayCart() {
    const container = document.getElementById('panier-items');
    const totalEl = document.getElementById('panier-total');

    if (cart.length === 0) {
        container.innerHTML = `<p class="empty-cart">Votre panier est vide.</p>`;
        totalEl.innerHTML = '';
        return;
    }

    let html = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * (item.quantity || 1);
        total += itemTotal;

        html += `
            <div class="cart-item">
                <div>
                    <h3>${item.name}</h3>
                    <p>${item.price.toLocaleString('fr-FR')} € × ${item.quantity} - ${item.couleur}</p>
                </div>
                <div style="text-align:right">
                    <strong>${itemTotal.toLocaleString('fr-FR')} €</strong><br>
                    <button class="remove-btn" data-index="${index}">Supprimer</button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
    totalEl.innerHTML = `
        <div class="total-line">
            <strong>Total :</strong> 
            <span class="total-price">${total.toLocaleString('fr-FR')} €</span>
        </div>
    `;

    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            cart.splice(index, 1);
            saveCart();
            displayCart();
        });
    });
}

function handleFormSubmit() {
    const form = document.getElementById('commande-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (cart.length === 0) {
            alert("Le panier est vide !");
            return;
        }

        const nom = document.getElementById('nom').value.trim();
        const email = document.getElementById('email').value.trim();

        if (!nom || !email) {
            alert("Veuillez remplir votre nom et email.");
            return;
        }

        // Redirection vers la page de paiement
        localStorage.setItem('currentOrder', JSON.stringify({
            cart: cart,
            customer: { nom, email }
        }));

        window.location.href = "paiement.html";   // ← Nouvelle page
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    setupSearch();
    displayCart();
    handleFormSubmit();
});