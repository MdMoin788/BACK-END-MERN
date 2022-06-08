require("dotenv").config();

const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect(process.env.MONGO_URL);
};
module.exports = connect;





// mongodb+srv://haleema:zehera@cluster0.pp0jc.mongodb.net/haleemawebsite?retryWrites=true&w=majority