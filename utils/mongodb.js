import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
    throw new Error(
      'Please define the MONGODB_URI environment variable inside .env.local'
    )
  }
  
const connectDb = () => {
    if(mongoose.connection.readyState >= 1){
        return
    }

    const options = {
        useUnifiedTopology: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useCreateIndex: true
      }
  
     mongoose.connect(MONGODB_URI, options).then(conn => console.log('Connected to the local db.'))

}

export default connectDb