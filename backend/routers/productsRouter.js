import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from "../data.js";
import Products from '../models/productsModels.js';

const productsRouter = express.Router();

productsRouter.get('/seed',
    expressAsyncHandler(async (req, res) => {
        await Products.remove({});
        const createdProducts = await Products.insertMany(data.products);
        res.send({ createdProducts });
        // res.send('removed');
    })
)

// get Products
productsRouter.get('/',
expressAsyncHandler(async (req, res)=>{
    const products = await Products.find({});
    res.send({products});
}))

// get Products by _id
productsRouter.get('/:id',
expressAsyncHandler(async (req, res)=>{
    const id = req.params.id;
    const products = await Products.find({"_id": id});
    res.send({products});
}))

// get Products by ean
productsRouter.get('/by-ean/:ean',
expressAsyncHandler(async (req, res)=>{
    const ean = req.params.ean;
    const products = await Products.find({"ean": ean});
    res.send({products});
}))


// get Products by ean
productsRouter.get('/by-code/:code',
expressAsyncHandler(async (req, res)=>{
    const code = req.params.code;
    const products = await Products.find({"article_code": code});
    res.send({products});
}))

export default productsRouter;