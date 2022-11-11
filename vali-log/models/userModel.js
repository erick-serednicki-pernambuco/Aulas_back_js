
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const {Schema} = mongoose;

const userSchema = new Schema({
    email:{
        type: String,
        required: [true, "Email não informado"],
        trim: true,
        unique: [true, 'Email ja utilizado']
    },
    password:{
        type:String,
        required: [true, 'Senha não informada'],
        trim: true,
        select: false,
        validate:{
            validator: function(valor) {
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/.test(valor);
            },
            message:'senha Não tem caracteres especiais e letras maiusculas'
        }
    }
});

userSchema.pre('save', (next) => {
    const hash = bcrypt.hashSync(this.password, 8);
    this.password =  hash;
    next();
});


module.exports = mongoose.model('User', userSchema)