# Ostaa

[![npm](https://img.shields.io/npm/v/npm.svg)]()
[![macOS](https://img.shields.io/badge/os-macOS-green.svg?style=flat)]()
[![Linux](https://img.shields.io/badge/os-linux-green.svg?style=flat)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat)](https://opensource.org/licenses/MIT)
[![Twitter: @omnijarstudio](https://img.shields.io/badge/contact-@omnijarstudio-blue.svg?style=flat)](https://twitter.com/omnijarstudio)

**Ostaa** is a lightweight JavaScript SDK for Kauppa. It allows you 
to build ecommerce into any web application. It's based on Kauppa's 
API and provides the ability to retrieve products and collections 
from your shop, add products to a cart, and perform checkout tasks 
checkout.

## Installation
**With Yarn:**
```bash
$ yarn add ostaa
```
**With NPM:**
```bash
$ npm install ostaa
```

## Builds
Ostaa has four build versions: ES, CommonJS, AMD, and UMD.

**ES, CommonJS:**
```javascript
import Client from 'ostaa';
```
**AMD:**
```javascript
import Client from 'ostaa/index.amd';
```
**UMD:**
```javascript
import Client from 'ostaa/index.umd';
```

## Examples

### Initializing the Client
```javascript
import Client from 'ostaa';

const client = Client.buildClient({
  domain: 'your-shop-name.kauppa.naamio.cloud',
  storefrontAccessToken: 'your-storefront-access-token'
});
```

### Fetching Products
```javascript
// Fetch all products in your shop
client.product.fetchAll().then((products) => {
  // Do something with the products
  console.log(products);
});

// Fetch a single product by ID
const productId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ=';

client.product.fetch(productId).then((product) => {
  // Do something with the product
  console.log(product);
});
```

### Fetching Collections
```javascript
// Fetch all collections, including their products
client.collection.fetchAllWithProducts().then((collections) => {
  // Do something with the collections
  console.log(collections);
  console.log(collections[0].products);
});

// Fetch a single collection by ID, including its products
const collectionId = 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzM2OTMxMjU4NA==';

client.collection.fetchWithProducts(collectionId).then((collection) => {
  // Do something with the collection
  console.log(collection);
  console.log(collection.products);
});
```