// productController.js

const subcategories = {
    liquidos: ['Jugos', 'Gaseosas', 'Bebidas Alcohólicas', 'Otros'],
    platos: ['Fríos', 'Calientes'],
    ensaladas: ['Ensalada 1', 'Ensalada 2', 'Ensalada 3'],
    postres: ['Postre 1', 'Postre 2', 'Postre 3'],
    especiales: ['Especial 1', 'Especial 2', 'Especial 3']
};

const subcategories2 = {
    Fríos: ['Ensalada César', 'Ensalada Griega', 'Ensalada de Atún'],
    Calientes: ['Pollo', 'Vacuno', 'Cerdo'],

};

const products = {
    Jugos: ['Jugo de Naranja', 'Jugo de Manzana', 'Jugo de Piña'],
    Gaseosas: ['Coca-Cola', 'Pepsi', 'Sprite'],
    'Bebidas Alcohólicas': ['Cerveza', 'Vino', 'Licor'],
    Otros: ['Agua Mineral', 'Té Helado', 'Limonada'],
    Pollo: ['Arroz', 'Papas'],
    Vacuno: ['Arroz', 'Papas'],
    Cerdo: ['Arroz', 'Papas'],
    // Fríos: ['Ensalada César', 'Ensalada Griega', 'Ensalada de Atún'],
    // Calientes: ['Sopa de Pollo', 'Pasta Bolognesa', 'Ratatouille'],
    'Ensalada 1': ['Ensalada de Tomate', 'Ensalada de Zanahoria', 'Ensalada de Remolacha'],
    'Ensalada 2': ['Ensalada de Pollo', 'Ensalada de Atún', 'Ensalada de Quinoa'],
    'Ensalada 3': ['Ensalada Mediterránea', 'Ensalada de Espinacas', 'Ensalada de Frutas'],
    'Postre 1': ['Tarta de Manzana', 'Brownie', 'Cheesecake'],
    'Postre 2': ['Tiramisú', 'Panna Cotta', 'Creme Brulee'],
    'Postre 3': ['Helado', 'Flan', 'Mousse de Chocolate'],
    'Especial 1': ['Especial del Chef 1', 'Especial del Chef 2', 'Especial del Chef 3'],
    'Especial 2': ['Especial del Día 1', 'Especial del Día 2', 'Especial del Día 3'],
    'Especial 3': ['Especial de Temporada 1', 'Especial de Temporada 2', 'Especial de Temporada 3']
};


function loadSubcategories(category) {
    const subcategoriesDiv = document.getElementById('subcategories-buttons');
    subcategoriesDiv.innerHTML = '';

    subcategories[category].forEach(subcategory => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-outline-secondary mb-2';
        button.textContent = subcategory;
        button.onclick = () => showProducts(subcategory);
        subcategoriesDiv.appendChild(button);
    });
}

function loadProducts(subcategory) {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';

    products[subcategory].forEach(product => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-outline-secondary mb-2 w-100';
        button.textContent = product;
        button.onclick = () => selectProduct(product, button);
        productsDiv.appendChild(button);
    });
}
