const mongoose = require("mongoose");
//mongoose.set('useFindAndModify', false);

const postsModel=mongoose.model(
    "node-api",
    {
        author:{
            type:String,
            required:true
        },
        message:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            default:Date.now
        }
    },
    "posts"
)
module.exports = { postsModel}