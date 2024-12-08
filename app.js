//URL HERE
const API_URL = "https://fakestoreapi.com/products";

// Function to fetch products
async function fetchProducts() {
  try {
    // Fetch data from the API
    const response = await fetch(API_URL);

    // Convert the response to JSON
    const products = await response.json();

    // Call a function to display the products
    displayProducts(products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Function to display products in the DOM
function displayProducts(products) {
  const container = document.getElementById("products-container");
  container.innerHTML = ""; // Clear the container

  products.forEach((product) => {
    // This is div for each product
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    // Add product details
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <div>
        <h3>${product.title}</h3>
        <p class="price">$${product.price}</p> <!--  class 'price' for color -->
        <p>${product.description}</p>
      </div>
    `;

    // Append the product div to the container
    container.appendChild(productDiv);
  });
}

// Fetch and display products when the page loads
fetchProducts();

function showDetails(title, description) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-description").innerText = description;
  document.getElementById("modal").style.display = "block"; // Show the modal
}

function closeModal() {
  document.getElementById("modal").style.display = "none"; // Hide the modal
}

// Close the modal when clicking outside of the modal content
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
