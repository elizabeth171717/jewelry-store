const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is working!');
});


// Mock product data
const products = [
    { id: 1, name: "Rainbow Necklace", price: 25.99, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Star Bracelet", price: 15.99, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Heart Earrings", price: 12.99, image: "https://via.placeholder.com/150" }
  ];


// Route to get all products
app.get('/products', (req, res) => {
    res.json(products);
  });

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
