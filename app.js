const express = require('express');
const mongodb = require('mongodb');
const app = express();
const port = 3000;

// MongoDB connection
const MongoClient = mongodb.MongoClient;
const uri = 'mongodb://0.0.0.0:27017'; // Replace with your MongoDB URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    try {
        await client.connect();
        const db = client.db('Location1'); // Replace with your database name
        const collectionNames = ['TimeStamp1', 'TimeStamp2', 'TimeStamp3', 'TimeStamp4', 'TimeStamp5'];

        const collectionData = await Promise.all(collectionNames.map(async (collectionName) => {
            const coll = db.collection(collectionName);
            const data = await coll.find().limit(4).toArray();
            return {
                collectionName: collectionName,
                data: data
            };
        }));

        res.render('index', { collectionData });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/fetchdata', async (req, res) => {
    const startDate = new Date(req.body.startDate + ' ' + req.body.startTime);
    const endDate = new Date(req.body.endDate + ' ' + req.body.endTime);

    try {
        const collectionData = await db.collection('system_stats').find({
            timestamp: {
                $gte: startDate,
                $lte: endDate
            }
        }).toArray();

        res.json(collectionData);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
