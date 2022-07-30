import express from 'express';
import bodyParse from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParse.json({ limit: "30mb", extended: true }));
app.use(bodyParse.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Runs the server into the following PORT
app.listen(PORT, () => console.log(`🚀 Server Running on PORT ${PORT}`));