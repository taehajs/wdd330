import ProductData from './ProductData.js';
import ProductList from './ProductList.js';
import { loadHeaderFooter, getParam } from './utils.mjs';

// Load header and footer
loadHeaderFooter();

// Get category from URL parameter
const category = getParam('category');

// Create data source
const dataSource = new ProductData();

// Select element to render product list
const listElement = document.querySelector('.product-list');

// Create ProductList instance
const myList = new ProductList(category, dataSource, listElement);

// Initialize product list
myList.init();

// Update page title with category
document.querySelector('h1').textContent = `Top Products: ${category}`;