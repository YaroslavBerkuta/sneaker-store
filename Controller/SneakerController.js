import SneakerSchema from "../Model/Sneaker.js";
import jwt from "jsonwebtoken";
import BrandSchema from "../Model/Brand.js";


export const create = async (req, res) => {
    try {
        const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
        const decoded = jwt.verify(token, 'privet');
        const {name, size, price, description, stock, brand} = req.body
        const getBrand = await BrandSchema.findOne({name: brand})
        const brandID = getBrand._id
        if (decoded.userRules !== "admin") {
            return res.status(500).json({
                message: "Недостатньо прав"
            })
        }
        const sneaker = new SneakerSchema({
            name, size, price, description, stock, brand:brandID
        })
        await sneaker.save()
        res.status(200).json({sneaker, decoded})
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "Не вдалося створити товар"
        })
    }
}
