import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if(!MONGODB_URI){
    throw new Error('Please define the MONGODB_URL environmental variable inside .env')
}

let cached = global.mongoose;

if(!cached){
    cached = global.mongoose = {conn: null, promise: null}
}

async function dbConnection(){
    if(cached.conn){
        return cached.conn
    }

    if(!cached.promise){
        const opts = {
            bufferCommands: false,
            useUnifiedTopology: true,
            useNewUrlParser: true
        }

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongo) => {
            return mongo;
        })
    }

    cached.conn = await cached.promise;
    return cached.conn
}  

export default dbConnection;