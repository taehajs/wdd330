import ProductData from './ProductData.mjs';
import ProductList from './ProductList.js';
import { loadHeaderFooter, getParam } from './utils.mjs';

loadHeaderFooter();

const category = getParam('category');

const dataSource = new ProductData();

const listElement = document.querySelector('.product-list');

const myList = new ProductList(category, dataSource, listElement);

myList.init();

document.querySelector('h1').textContent = `Top Products: ${category}`;