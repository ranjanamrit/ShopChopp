const Products = require('../models/productModel')
class ApiFeatures {
    constructor(query,queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
        const queryObject = {...this.queryString}

        const excludedFields = ['page','sort','limits']
        excludedFields.forEach(el=>delete(queryObject[el]))

        let queryStr= JSON.stringify(queryObject)
        queryStr=queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g,match=> '$' + match)
        this.query.find(JSON.parse(queryStr))
        
        return this;
    }
    sorting(){}
    paginating(){}
}
const productCtrl = {
    getProduct: async (req,res) => {
        try {
            const features = new ApiFeatures(Products.find(), req.query).filtering()
            const product = await features.query
            res.json(product)
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }
    },
    createProduct: async (req,res) => {
        try {
            const {product_id,title,price,description,content,images,category} = req.body;
            if(!images) return res.status(400).json({msg:"No images uploaded"})

            const product = await Products.findOne({product_id})
            if(product) return res.status(400).json({msg:"Product already exist"})

            const newProduct = new Products({
                product_id,
                title: title.toLowerCase(),
                price,
                description,
                content,
                images,
                category
            })
            await newProduct.save()
            res.json({msg:'Created a product'})
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }
    },
    updateProduct: async (req,res) => {
        try {
            const {title,price,description,content,images,category} = req.body;
            if(!images) return res.status(400).json({msg:'Image not uploaded'})

            await Products.findByIdAndUpdate({_id: req.params.id},{title: title.toLowerCase(),price,description,content,images,category})
            res.json('Updated the product')
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }
    },
    deleteProduct: async (req,res) => {
        try {
            await Products.findByIdAndDelete(req.params.id)
            res.json('Deleted a product')
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }
    }
}

module.exports = productCtrl