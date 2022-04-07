# SimpleApiStore

[SimpleApiStore](https://simpleapistore.vercel.app) is a free online API that you can use whenever you need pseudo-real data for your e-commerce prototype. It's perfect for teaching purposes, samples codes, test, etc.

## Resources
There are only one resource in this api:
- Products [https://simpleapistore.vercel.app/products](https://simpleapistore.vercel.app/products)

## How to
You can fetch data awith any kind of methods you know (fetch API, Axios, etc.)

### Get all products

```
fetch("https://simpleapistore.vercel.app/products")
  .then((res) => res.json())
  .then((json) => console.log(json));
```

### Get a single product

```
fetch("https://simpleapistore.vercel.app/products/1")
  .then((res) => res.json())
  .then((json) => console.log(json));
```