const express = require("express");
const dotenv = require("dotenv"); // Import dotenv
const bodyParser = require('body-parser');
const UserRoute = require('./Routes/Users');
const ExpensesRoute = require('./Routes/Expenses');
const connectDB = require("./DB/connect");
const cors = require('cors');
const app = express();

dotenv.config(); // Load environment variables from .env

app.use(cors());
app.use(bodyParser.json());
app.use('/users', UserRoute);
app.use('/expenses', ExpensesRoute);

const PORT = process.env.PORT || 3000;

async function serverStart() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

serverStart();
