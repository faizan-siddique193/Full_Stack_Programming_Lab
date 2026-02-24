// Create Map: Product ID => Product object
const products = new Map();

// Add 5 products
products.set(101, {name:"Laptop", price:1200});
products.set(102, {name:"Mouse", price:25});
products.set(103, {name:"Keyboard", price:45});
products.set(104, {name:"Monitor", price:300});
products.set(105, {name:"Headphones", price:80});

const productList = document.getElementById("productList");
const totalCount = document.getElementById("totalCount");

function displayProducts(map) {
    let output = "";
    for(const [id, product] of map) {
        output += `<div class="product-item">ID: ${id} | ${product.name} - $${product.price}</div>`;
    }
    productList.innerHTML = output;
    totalCount.textContent = map.size;
}

// Initial display
displayProducts(products);

// Search
document.getElementById("searchBtn").addEventListener("click", () => {
    const id = parseInt(document.getElementById("searchInput").value);
    if(products.has(id)) {
        const p = products.get(id);
        productList.innerHTML = `<div class="product-item">ID: ${id} | ${p.name} - $${p.price}</div>`;
    } else {
        productList.innerHTML = `<div class="product-item">Product not found.</div>`;
    }
});

// Delete
document.getElementById("deleteBtn").addEventListener("click", () => {
    const id = parseInt(document.getElementById("deleteInput").value);
    products.delete(id);
    displayProducts(products);
});