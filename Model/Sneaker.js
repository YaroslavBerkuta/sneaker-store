import mongoose from "mongoose"

const SneakerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: Array,
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    stock: {
        type: Boolean,
        required: true,
    },
    brand: {
        type: mongoose.Types.ObjectId,
        ref: "Brand"
    },

    mainIMG: {
        type: String,
        default: "https://adidas-yeezy.ru/image/catalog/350/FU9007/mini.jpg"
    },
    gallery: {
        type: Array
    }

})

export default mongoose.model("Sneaker", SneakerSchema)