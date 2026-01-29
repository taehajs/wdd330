import ProductData from './ProductData.mjs';
import { getParam, loadHeaderFooter } from './utils.mjs';

loadHeaderFooter();

const productId = getParam('id');
const dataSource = new ProductData();

async function renderProductDetail() {
  const product = await dataSource.findProductById(productId);
  document.querySelector('.product-detail').innerHTML = `
    <h2>${product.Name}</h2>
    <img src="${product.Images.PrimaryLarge}" alt="${product.Name}" />
    <p>${product.DescriptionHtmlSection}</p>
    <p>Price: ${product.SuggestedRetailPrice}</p>
  `;
}

renderProductDetail();