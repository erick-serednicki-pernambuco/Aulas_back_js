
const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = new Schema({
    email:{
        type: String,
        require: [true, "Email não informado"],
        trim: true,
        unique: [true, 'Email ja utilizado']
    },
    password:{
        type:String,
        require:[true, 'Senha não informada'],
        trim: true,
        select: false
    }
});




module.exports = mongoose.model('User', userSchema)