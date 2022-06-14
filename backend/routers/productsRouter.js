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


export default productsRouter;