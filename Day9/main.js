const productsContainer = document.querySelector(".container-cards");
const btn = document.querySelector(".btn");
const cart = document.querySelector(".cart");
async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    const data = await response.json();

    data.forEach((product) => {
      productsContainer.innerHTML += `
      <div class="card">
        <img src="${product.image}" />

        <h3>${product.title}</h3>
        
        <p>$${product.price}</p>
        <button class="btn">add to cart</button>
      </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}


getProducts();
