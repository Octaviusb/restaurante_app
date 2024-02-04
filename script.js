document.addEventListener('DOMContentLoaded', function () {
    const menuContainer = document.getElementById('menu-container');
    const orderSummaryList = document.getElementById('order-summary-list');
    const totalElement = document.getElementById('total');
    let total = 0;

    // Definir la lista de productos para cada día de la semana
    const menuData = {
        lunes: [
            { name: "Arroz con pollo", price: 10000 },
            { name: "Mojarra frita", price: 10000 },
            { name: "Ensalada de verduras", price: 1500 },
            { name: "Ensalada corriente", price: 1000 },
            { name: "Sopa de pasta", price: 2500 },
            { name: "Sopa de plátano", price: 2500 }
        ],
        martes: [
            { name: "Pechuga a la plancha", price: 10000 },
            { name: "Carne Asada", price: 10000 },
            { name: "Ensalada de verduras", price: 1500 },
            { name: "Ensalada corriente", price: 1000 },
            { name: "Sopa de pasta", price: 2500 },
            { name: "Sopa de cuchuco", price: 2500 }
        ],
        miercoles: [
            { name: "Mini Paisa", price: 10000 },
            { name: "Lengua en salsa", price: 10000 },
            { name: "Ensalada mixta", price: 1500 },
            { name: "Ensalada corriente", price: 1000 },
            { name: "Sopa de mazamorra", price: 2500 },
            { name: "Sopa de plátano", price: 2500 }
        ],
        jueves: [
            { name: "Arroz con pollo", price: 10000 },
            { name: "Mojarra frita", price: 10000 },
            { name: "Ensalada de verduras", price: 1500 },
            { name: "Ensalada corriente", price: 1000 },
            { name: "Sopa de pasta", price: 2500 },
            { name: "Sopa de plátano", price: 2500 }
        ],
        viernes: [
            { name: "Pechuga a la plancha", price: 10000 },
            { name: "Carne Asada", price: 10000 },
            { name: "Ensalada de verduras", price: 1500 },
            { name: "Ensalada corriente", price: 1000 },
            { name: "Sopa de pasta", price: 2500 },
            { name: "Sopa de cuchuco", price: 2500 }
        ],
        sabado: [
            { name: "Mini Paisa", price: 10000 },
            { name: "Lengua en salsa", price: 10000 },
            { name: "Ensalada mixta", price: 1500 },
            { name: "Ensalada corriente", price: 1000 },
            { name: "Sopa de mazamorra", price: 2500 },
            { name: "Sopa de plátano", price: 2500 }
        ]
    };

    // Genera dinámicamente los elementos del menú
    menuData.forEach(dayMenu => {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.innerHTML = `<h2>${dayMenu.day}</h2><ul></ul>`;
        const dayList = dayElement.querySelector('ul');

        dayMenu.dishes.forEach(dish => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span class="dish">${dish.name}</span> - $${dish.price.toFixed(2)}`;
            dayList.appendChild(listItem);
        });

        menuContainer.appendChild(dayElement);
    });

    // Actualiza el resumen del pedido cuando cambia la selección
    function updateOrderSummary() {
        total = 0;
        orderSummaryList.innerHTML = '';

        const selectedProducts = document.querySelectorAll('.product-checkbox:checked');
        selectedProducts.forEach(selectedProduct => {
            const productId = selectedProduct.id.split('-')[1];
            const product = menuData.flatMap(dayMenu => dayMenu.dishes).find(p => p.name === productId);

            const listItem = document.createElement('li');
            listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
            orderSummaryList.appendChild(listItem);

            total += product.price;
        });

        totalElement.textContent = total.toFixed(2);
    }

    // Event Listener para actualizar el resumen del pedido al cambiar la selección
    menuContainer.addEventListener('change', updateOrderSummary);
});
