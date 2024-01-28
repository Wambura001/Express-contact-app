const mongoose = require("mongoose")

const connectDb = async() => {
    try {
        // const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        const connect = await mongoose.connect("mongodb+srv://meshacksirincha:hB1NvOaBTfkQm7tt@cluster0.lw3a9z5.mongodb.net/mycontacts_backend?retryWrites=true&w=majority")
        console.log("Database Connected: ", connect.connection.host, connect.connection.name)
    } catch (err) {
        console.log(err)
        process.exit(1);
    }
}

module.exports = connectDb;