const moongoose = require('mongoose');

const connectDB = async () => {
    try {
        await moongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected'+ process.env.PORT);
    } catch (error) {
        console.log(error);
    }
    };
    module.exports = connectDB;