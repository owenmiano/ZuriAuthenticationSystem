const {Schema,model}=require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');
// Create User Schema
const bookSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
       
    },
 },
{
    timestamps:true
})

bookSchema.plugin(mongoosePaginate);

const Books=model('books',bookSchema)
module.exports=Books