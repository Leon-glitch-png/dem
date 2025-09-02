import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!',hostname:  require('os').hostname() });

});


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})