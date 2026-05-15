const mongoose =require("mongoose");



function connectToDB() {
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("SERVER IS CONNECTED TO DB");
    })
    .catch(err=>{
        console.log(err)
        process.exit(1)
    })
}

module.exports = connectToDB;
