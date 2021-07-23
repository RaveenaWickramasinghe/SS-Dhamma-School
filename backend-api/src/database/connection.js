import mongoose from 'mongoose';

function connection() {
  const DATABASEURI = 'mongodb+srv://studentapi:raveena98@sammasamadhidhamma.0ymnc.mongodb.net/schooldb?retryWrites=true&w=majority';

  return mongoose.connect(DATABASEURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
  })
  .then(() =>{
    console.log('Database Synced');
  })
  .catch((error) =>{
    //If there is a db error
    console.log("Database Error : " + error.message);
  })
}

export default connection;