// js/form.js

// Example array of product objects
const products = [
    { name: "Product A" },
    { name: "Product B" },
    { name: "Product C" },
    { name: "Product D" }
];

// Get the select element
const productSelect = document.getElementById("productName");

// Dynamically create the option elements
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});
