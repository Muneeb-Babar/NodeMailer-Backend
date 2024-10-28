import mongoose from "mongoose";
const { Schema } = mongoose;

const ContactSchema=new Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        require:true
    }
});

const ContactUs=mongoose.model('contactUs',ContactSchema)

export default ContactUs