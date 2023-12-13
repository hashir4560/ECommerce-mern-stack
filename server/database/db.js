import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-7dzthxn-shard-00-00.fjlzxsx.mongodb.net:27017,ac-7dzthxn-shard-00-01.fjlzxsx.mongodb.net:27017,ac-7dzthxn-shard-00-02.fjlzxsx.mongodb.net:27017/?ssl=true&replicaSet=atlas-invcji-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("DataBase Connected Successfully");
  } catch (error) {
    console.log("Error while connecting to the database", error.message);
  }
};
export default Connection;
