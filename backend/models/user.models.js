import mongoose from "mongoose";
import validator from "validator";
const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true,
        unique : true,
        validator : {
            validator: function (value) {
                return validator.isEmail(value);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    password : {
        type : String,
        required : true
    },
    cartData : {
        type : Object,
        default : {}
    }
});


const userModel = mongoose.models.user || mongoose.model('User', userSchema);
export default userModel;