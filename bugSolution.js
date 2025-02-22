const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Input validation
  if (!user || !user.name || !user.email) {
    return res.status(400).send('Missing required user information');
  }
  try {
    db.createUser(user, (err, result) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).send('Error creating user');
      } else {
        res.status(201).send(result);
      }
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).send('An unexpected error occurred');
  }
});

// ... other routes ...

app.listen(3000, () => console.log('Server listening on port 3000'));