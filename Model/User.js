import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name: {
        type: String, default: 'user', required: true
    }, email: {
        type: String, required: true, unique: true,
    }, rules: {
        type: String, default: "user"
    }, password: {
        type: String, required: true
    },
    avatarURL:{
        type:String
    }

},{
    timestamps:true
})

export default mongoose.model("User", UserSchema)