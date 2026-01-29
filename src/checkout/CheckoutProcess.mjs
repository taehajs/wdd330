import { getLocalStorage } from "../utils.mjs";
import ExternalServices from "../ExternalServices.mjs";

export default class CheckoutProcess {
  constructor() {
    this.items = getLocalStorage("so-cart") || [];
    this.subtotal = 0;
    this.tax = 0;
    this.shipping = 0;
    this.total = 0;
  }

  calculateSubtotal() {
    this.subtotal = this.items.reduce(
      (sum, item) => sum + item.FinalPrice * item.quantity,
      0
    );

    document.querySelector("#subtotal").textContent =
      this.subtotal.toFixed(2);
  }

  calculateOrderTotal() {
    this.tax = this.subtotal * 0.06;

    if (this.items.length > 0) {
      this.shipping = 10 + (this.items.length - 1) * 2;
    } else {
      this.shipping = 0;
    }

    this.total = this.subtotal + this.tax + this.shipping;

    document.querySelector("#tax").textContent = this.tax.toFixed(2);
    document.querySelector("#shipping").textContent =
      this.shipping.toFixed(2);
    document.querySelector("#orderTotal").textContent =
      this.total.toFixed(2);
  }

  packageItems(items) {
    return items.map((item) => ({
      id: item.Id,
      name: item.Name,
      price: item.FinalPrice,
      quantity: item.quantity,
    }));
  }

  async checkout(form) {
    const formData = new FormData(form);
    const order = Object.fromEntries(formData.entries());

    order.orderDate = new Date().toISOString();
    order.items = this.packageItems(this.items);
    order.orderTotal = this.total.toFixed(2);
    order.tax = this.tax.toFixed(2);
    order.shipping = this.shipping;

    const services = new ExternalServices();
    const response = await services.checkout(order);

    console.log("✅ SERVER RESPONSE:", response);
  }
}
