const express = require('express');
const fs = require('fs');
const readline = require('readline');
const app = express();

const database = require('./database');
const ProductService = require('./services/productService');

async function databaseConnect() {
  await database.init();
}

async function databaseClose() {
  await database.close();
}

function emptyFile() {
  fs.writeFile('result.json', '{"data": []}', function(){
    console.log('Archivo vaciado');
  })
}

function writeFich(result) {
  let obj = {
    data: []
  };
  fs.readFile('result.json', 'utf8', function readFileCallback(error, data){
    if (err){
        console.log(error);
    } else {
    obj = JSON.parse(data);
    result.forEach(elem => {
      if (elem.dataValues.cant !== 0) {
        obj.data.push({
          id: elem.dataValues.id,
          name: elem.dataValues.name,
          cant: elem.dataValues.cant
        });
      }
    })
    let json = JSON.stringify(obj, null, 4);
    fs.writeFile('result.json', json, 'utf8', function (err) {
      if (err) {
        console.log(err);
      }
    });
  }});
}

async function start () {
  try {
    await databaseConnect();
  } catch (err) {
    console.log(err);
    await databaseClose();
  }
}

async function modifyCant(name, newCant) {
  try {
    let product = await ProductService.findProductByName(name);
    await ProductService.updateProductByName(product, name, newCant);
    await ProductService.saveProduct(product);
    await ProductService.findProductByName(name);
    let result = await ProductService.findAllProducts();
    emptyFile();
    writeFich(result);
    await databaseClose();
  } catch (err) {
    console.log(err);
    await databaseClose();
  }
}

start()
  .then(async () => {
    await modifyCant('magdalena de frambuesa', 0);
  })
  .catch(err => {
    console.log(err);
  });



