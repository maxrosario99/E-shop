const express = require('express');
const productsRouter = require('./path/to/products');

const app = express();
const port = 5000;

app.use('/api', productsRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
