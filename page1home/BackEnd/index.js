import express from 'express';
import mysql from 'mysql';

const app = express();

///database connection
const dbConfig ={
    host: 'bwozrvbtcwccmtbusrhe-mysql.services.clever-cloud.com',
    user: 'uz8etal6dd69um8m',
    password: 'PRMDdDGQTjqSOydSk1Tr',
    database: 'bwozrvbtcwccmtbusrhe',
};
 
const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if(err){
        console.error('Error connecting to myaql', err.message);
        return;
    } else{
    console.log('Connected to mysql!');}
});

///database connection

/// Fetch data from the Chocolates table
app.get('/Chocolate', (req, res) => {
    const query = 'SELECT * FROM Chocolates'; // Query to fetch all rows from the Chocolates table

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data from Chocolates table:', err.message);
            res.status(500).json({ error: 'Failed to fetch data' });
            return;
        }

        res.json(results); // Send the fetched data as JSON to the frontend
    });
});

app.get('/', (req, res) => {
   res.send('Hello World');
});

app.get('/aboutus', (req, res) => {
    res.send('About Us');
 });



app.listen(5006, () => {
    console.log('Server started at http://localhost:5006');
});
