const express = require('express');
const mongodb = require('mongodb');
const ejs = require('ejs');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));

const mongoURI = 'mongodb://0.0.0.0:27017/mydb'; // Update the URI as needed

mongodb.MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  const db = client.db('mydb'); // Use the database

  app.get('/', async (req, res) => {
    try {
      const collectionData = await db.collection('system_stats').find().toArray();
      res.render('index', { collectionData }); // Render the index.ejs template
    } catch (error) {
      console.error('Error fetching collection data:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  app.post('/fetchdata', async (req, res) => {
    const startDate = new Date(req.body.startDate);
    const endDate = new Date(req.body.endDate);
    const startTime = req.body.startTime;
    const endTime = req.body.endTime;
    
    // Combine start and end date-time values for comparison with database
    const combinedStartDate = new Date(startDate.toISOString().split('T')[0] + 'T' + startTime);
    const combinedEndDate = new Date(endDate.toISOString().split('T')[0] + 'T' + endTime);
    
    try {
        const collectionData = await db.collection('system_stats').find({
            timestamp: {
                $gte: combinedStartDate,
                $lte: combinedEndDate
            }
        }).toArray();
    
        res.json(collectionData);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
});

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
