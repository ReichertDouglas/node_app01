const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Server is running');
})

