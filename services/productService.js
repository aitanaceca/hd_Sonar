const productRepository = require('../repositories/productRepository');

async function findAllProducts() {
  return await productRepository.findAllProducts();
}

async function findProductByName(name) {
  return productRepository.findProductByName(name);
}

async function updateProductByName(product, name, cant) {
  return await productRepository.updateProductByName(product, name, cant);
}

async function saveProduct(product) {
  return await productRepository.saveProduct(product);
}

module.exports = {
  findAllProducts,
  findProductByName,
  updateProductByName,
  saveProduct
}