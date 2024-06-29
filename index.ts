// console.log("Hello world")
import express from 'express';

const app = express();
app.get('/', (req, res) => {
    console.log('Hello world');
    res.send("hey brother")
});
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
