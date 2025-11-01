const mongoose = require('mongoose')

const mongoURI = process.env.MONGO_URL;
const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("MongoDB connected successfully!");
    } catch (err) {
        console.error("Failed to connect MongoDB:", err);   
    }
};

module.exports = connectToMongo;
