const mongoose = require('mongoose');


//DataBase connectivity..........................
const dbConnection = ()=>{
    mongoose.connect("mongodb://0.0.0.0:27017/apitest", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`mongodb is connection successfully`);
}).catch((err) => {
    console.log(err);
})
}

module.exports = dbConnection
