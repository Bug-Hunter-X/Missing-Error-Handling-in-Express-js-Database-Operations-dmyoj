const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Missing error handling if user data is incomplete or invalid
  db.createUser(user, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating user');
    } else {
      res.status(201).send(result);
    }
  });
});

// ... other routes ...

app.listen(3000, () => console.log('Server listening on port 3000'));