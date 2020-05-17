const mongoose = require('mongoose');
const  URI=  "mongodb+srv://gamey:gamey@gameescluster-2nyku.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async ()=>{
 mongoose.connect(URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(() => console.log('Database connection established'))
    .catch(err => console.log(err));  
};
module.exports= connectDB;
