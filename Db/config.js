require('dotenv').config();

const mongoose = require('mongoose');
mongoose.set("strictQuery", true);
const databaseUrl = "mongodb+srv://subratyeeshu:Mario774942@subratyeeshu.luwewwa.mongodb.net/?retryWrites=true&w=majority";;

mongoose.connect(databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to database');
}).catch((error) => {
  console.error(error);
});
