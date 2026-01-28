import ProductData from './ProductData.mjs';
import { loadHeaderFooter, getParam } from './utils.mjs';

loadHeaderFooter();

const category = getParam('category');
const dataSource = new ProductData();
const productListElement = document.querySelector('.product-list');

async function renderList() {
  const products = await dataSource.getData(category);
  productListElement.innerHTML = products.map(product => `
    <div class="product-card">
      <a href="../product_pages/${product.Id}.html">
        <img src="${product.Images.PrimaryMedium}" alt="${product.Name}" />
        <h2>${product.Name}</h2>
        <p>${product.ListPrice}</p>
      </a>
    </div>
  `).join('');
}

renderList();