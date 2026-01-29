import { setLocalStorage } from './utils.mjs';

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.dataSource = dataSource;
    this.product = {};
  }

  async init() {
    this.product = await this.dataSource.findProductById(this.productId);

    this.renderProductDetails();

    document.getElementById('addToCart')
      .addEventListener('click', this.addProductToCart.bind(this));
  }

  addProductToCart() {
    let cart = JSON.parse(localStorage.getItem('so-cart')) || [];
    cart.push(this.product);
    setLocalStorage('so-cart', cart);
  }

  renderProductDetails() {
    document.querySelector('.product-detail').innerHTML = `
      <h2>${this.product.Name}</h2>
      <img src="${this.product.Images.PrimaryLarge}" alt="${this.product.Name}" />
      <p>${this.product.DescriptionHtmlSection}</p>
      <p>Price: ${this.product.SuggestedRetailPrice}</p>
      <button id="addToCart">Add to Cart</button>
    `;
  }
}