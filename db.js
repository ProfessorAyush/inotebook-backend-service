const mongoose = require('mongoose');

// Replace "mydb" with the actual database name you want to use
const mongoURI = "mongodb://localhost:27017/inotebook";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("MongoDB connected successfully!");
    } catch (err) {
        console.error("Failed to connect MongoDB:", err);   
    }
};

module.exports = connectToMongo;
