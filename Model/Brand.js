import mongoose from "mongoose"

const BrandSchema = new mongoose.Schema({
    name: {
        type: String, required: true,
    }, logo: {
        type: String, default: "https://adidas-yeezy.ru/image/catalog/350/FU9007/mini.jpg"
    }, sneaker: {
        type: mongoose.Types.ObjectId,
        ref: "Sneaker"
    }
})

export default mongoose.model("Brand", BrandSchema)