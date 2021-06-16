const Mongoose  = require("mongoose");

const userSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
    },
    cart: {
        type:Array,
        default:[]
    }
},{
    timestamps: true
})

module.exports = Mongoose.model('Users', userSchema)