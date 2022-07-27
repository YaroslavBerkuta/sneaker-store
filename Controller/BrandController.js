import BrandSchema from "../Model/Brand.js"
import jwt from "jsonwebtoken";


export const create = async (req, res) => {
    try {
        const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
        const decoded = jwt.verify(token, 'privet');
        const {name, logo} = req.body
        const dublicate = await BrandSchema.findOne({name})
        if (decoded.userRules !== "admin") {
            return res.status(500).json({
                message: "Недостатньо прав"
            })
        }
        if (dublicate) {
            return res.status(404).json({
                message: "такий бренд уже існує"
            })
        }
        const brand = new BrandSchema({
            name, logo
        })
        await brand.save()
        res.status(200).json({brand,decoded})
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: "Не вдалося створити товар"
        })
    }
}

export const getAll = async (req,res) => {
    try {
        const brand = await BrandSchema.find();
        res.json(brand);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось получить бренди',
        });
    }
}


