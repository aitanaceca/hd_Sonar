const productRepository = require('../repositories/productRepository');

async function findAllProducts() {
  return productRepository.findAllProducts();
}

async function findProductByName(name) {
  return productRepository.findProductByName(name);
}

async function updateProductByName(product, name, cant) {
  return productRepository.updateProductByName(product, name, cant);
}

async function saveProduct(product) {
  return productRepository.saveProduct(product);
}

module.exports = {
  findAllProducts,
  findProductByName,
  updateProductByName,
  saveProduct
}