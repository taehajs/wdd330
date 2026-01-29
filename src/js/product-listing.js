import ProductData from './ProductData.mjs';
import { loadHeaderFooter, getParam } from './utils.mjs';

loadHeaderFooter();

const category = getParam('category');
const dataSource = new ProductData();
const productListElement = document.querySelector('.product-list');

async function renderList() {
  try {
    const products = await dataSource.getData(category);
    document.querySelector('h1').textContent = `Top Products: ${category}`;
    if (!products || products.length === 0) {
      productListElement.innerHTML = "<p>The product could not be loaded.</p>";
      return;
    }
    productListElement.innerHTML = products.map(product => `
      <div class="product-card">
        <a href="../product_pages/${product.Id}.html">
          <img src="${product.Images.PrimaryMedium}" alt="${product.Name}" />
          <h2>${product.Name}</h2>
          <p>${product.SuggestedRetailPrice}</p>
        </a>
      </div>
    `).join('');
  } catch (err) {
    console.error("Error loading products:", err);
    productListElement.innerHTML = "<p>The product could not be loaded.</p>";
  }
}

renderList();