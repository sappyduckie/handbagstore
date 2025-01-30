document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            name: 'Handbag 1',
            price: '$50',
            image: 'img/bag1.png'
        },
        {
            name: 'Handbag 2',
            price: '$60',
            image: 'img/bag2.png'
        },
        {
            name: 'Handbag 3',
            price: '$70',
            image: 'img/bag3.png'
        },
        {
            name: 'Handbag 4',
            price: '$80',
            image: 'img/bag4.png'
        },
        {
            name: 'Handbag 5',
            price: '$90',
            image: 'img/bag5.png'
        }
    ];

    const container = document.querySelector('.container');
    const cart = [];

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;

        productDiv.querySelector('.add-to-cart').addEventListener('click', () => {
            cart.push(product);
            updateCart();
        });

        container.appendChild(productDiv);
    });

    const cartTab = document.querySelector('.cart-tab');
    const cartContent = document.querySelector('.cart-content');

    cartTab.addEventListener('click', () => {
        cartContent.classList.toggle('visible');
    });

    function updateCart() {
        cartContent.innerHTML = '<h2>Cart</h2>';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${item.name} - ${item.price}</p>
            `;
            cartContent.appendChild(cartItem);
        });
    }

    // Add event listener for the home button
    document.querySelector('nav ul li a[href="#"]').addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = '/home';
    });
});
