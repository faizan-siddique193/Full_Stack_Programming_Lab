// Rest Operator: Collect multiple products
function addToCart(...items) {
    return items;
}

// Store products in array
const products = addToCart(
    "Laptop",
    "Headphones",
    "Mouse",
    "Keyboard",
    "Smartphone"
);

// Spread Operator: Clone cart
const clonedCart = [...products];

// Array Destructuring
const [firstProduct, ...remainingProducts] = clonedCart;

// Display Results
document.getElementById("cartOutput").innerHTML = `
    <p>Total Items: <span class="highlight">${clonedCart.length}</span></p>
    <p>First Product: <span class="highlight">${firstProduct}</span></p>
    <p>Remaining Products: <span class="highlight">${remainingProducts.join(", ")}</span></p>
    <p>Updated Cart: <span class="highlight">${clonedCart.join(", ")}</span></p>
`;