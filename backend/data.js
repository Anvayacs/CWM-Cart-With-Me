import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Anvay',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Amity-VS1',
        logo: '/images/ANV.jpg',
        description: 'Best seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      "name": "Nike Slim Shirt",
      "category": "Mens Clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "price": 120,
      "countInStock": 10,
      "brand": "Nike",
      "rating": 4.5,
      "numReviews": 10,
      "description": "high quality product"
    },
    {
      "name": "Pierced Owl Rose Gold Plated",
      "category": "Jewelry",
      "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      "price": 11,
      "countInStock": 20,
      "brand": "Pierced Owl",
      "rating": 1,
      "numReviews": 100,
      "description": "high quality product"
    },
    {
      "name": "Dragon Station Chain Bracelet",
      "category": "Jewelry",
      "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "price": 695,
      "countInStock": 2,
      "brand": "John Hardy ",
      "rating": 4.8,
      "numReviews": 17,
      "description": "high quality product"
    },
    {
      "name": "Solid Gold Petite Micropave",
      "category": "Jewelry",
      "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      "price": 168,
      "countInStock": 15,
      "brand": "Aera",
      "rating": 3.9,
      "numReviews": 70,
      "description": "high quality product"
    },
    {
      "name": "White Gold Plated Princess",
      "category": "Jewelry",
      "image": " https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      "price": 10,
      "countInStock": 5,
      "brand": "Aera",
      "rating": 3,
      "numReviews": 100,
      "description": "high quality product"
    },
    {
      "name": "Foldsack No. 1 Backpack",
      "category": "Mens Clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "price": 110,
      "countInStock": 12,
      "brand": "Fjallraven",
      "rating": 3.9,
      "numReviews": 120,
      "description": "high quality product"
    },
    {
      "name": "Mens Cotton Jacket",
      "category": "Mens Clothing",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "price": 120,
      "countInStock": 10,
      "brand": "Nike",
      "rating": 4.5,
      "numReviews": 10,
      "description": "high quality product" 
    },
    {
      "name": "Portable External Hard Drive",
      "category": "Electronics",
      "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      "price": 64,
      "countInStock": 10,
      "brand": "Nike",
      "rating": 3.3,
      "numReviews": 203,
      "description": "high quality product"
    },
    {
      "name": "Sandisk SSD Plus",
      "category": "Electronics",
      "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      "price": 109,
      "countInStock": 10,
      "brand": "Sandisk",
      "rating": 2.9,
      "numReviews": 470,
      "description": "high quality product"
    },
    {
      "name": "Silicon Power 256GB",
      "category": "Electronics",
      "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      "price": 109,
      "countInStock": 10,
      "brand": "Sandisk",
      "rating": 2.9,
      "numReviews": 470,
      "description": "high quality product"
    },
    {
      "name": "WD 4TB Gaming Drive",
      "category": "Electronics",
      "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      "price": 109,
      "countInStock": 10,
      "brand": "Sandisk",
      "rating": 2.9,
      "numReviews": 470,
      "description": "high quality product"
    },
    {
      "name": "Acer SB220Q bi 21.5 inches FHD",
      "category": "Electronics",
      "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      "price": 109,
      "countInStock": 10,
      "brand": "Sandisk",
      "rating": 2.9,
      "numReviews": 470,
      "description": "high quality product"
    },
    {
      "name": "Samsung 49-Inch CHG90",
      "category": "Electronics",
      "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      "price": 109,
      "countInStock": 10,
      "brand": "Sandisk",
      "rating": 2.9,
      "numReviews": 470,
      "description": "high quality product"
    },
    {
      "name": "Women's 3-in-1 Snowboard Jacket",
      "category": "Womens Clothing",
      "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      "price": 120,
      "countInStock": 10,
      "brand": "Nike",
      "rating": 4.5,
      "numReviews": 10,
      "description": "high quality product"
    },
    {
      "name": "Leather Moto Biker Jacket",
      "category": "Womens Clothing",
      "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      "price": 120,
      "countInStock": 10,
      "brand": "Nike",
      "rating": 4.5,
      "numReviews": 10,
      "description": "high quality product"
    },
    {
      "name": "Striped Climbing Raincoats",
      "category": "Womens Clothing",
      "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      "price": 120,
      "countInStock": 10,
      "brand": "Nike",
      "rating": 4.5,
      "numReviews": 10,
      "description": "high quality product"
    },
    {
      "name": "Short Sleeve Boat Neck V ",
      "category": "Womens Clothing",
      "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      "price": 120,
      "countInStock": 10,
      "brand": "Nike",
      "rating": 4.5,
      "numReviews": 10,
      "description": "high quality product"
    },
    {
      "name": "Opna Women's Short Sleeve Moisture",
      "category": "Womens Clothing",
      "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      "price": 120,
      "countInStock": 10,
      "brand": "Nike",
      "rating": 4.5,
      "numReviews": 10,
      "description": "high quality product"
    },
    {
      "name": "Womens T Shirt Casual",
      "category": "Womens Clothing",
      "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      "price": 120,
      "countInStock": 10,
      "brand": "Nike",
      "rating": 4.5,
      "numReviews": 10,
      "description": "high quality product"
    },
  ],
};
export default data;
