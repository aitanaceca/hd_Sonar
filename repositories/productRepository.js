const { models } = require('../database');

async function findAllProducts() {
  return models.product.findAll();
}

async function findProductByName(name) {
  return models.product.findOne({
    where: { name }
  })
}

async function updateProductByName(product, name, cant) {
  return product.update({
    name: name,
    cant: cant
  })
}

async function saveProduct(product) {
  return product.save();
}

module.exports = {
  findAllProducts,
  findProductByName,
  updateProductByName,
  saveProduct
}