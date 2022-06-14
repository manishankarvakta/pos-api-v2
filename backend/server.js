import express from "express";
import mongoose from 'mongoose';
import productsRouter from "./routers/productsRouter.js";
import userRouter from "./routers/userRouter.js";
const pass = "Izzw2cdbmsfKaagl";
const user = "posdb-user";
const dbUrl = `mongodb+srv://${user}:${pass}@cluster0.ueaqntn.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
mongoose.connect(process.env.MONGODB_URL || dbUrl, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    });

app.use('/api/users', userRouter);
app.use('/api/products', productsRouter);

app.get('/', (req, res) => {
    res.send("server is ready")
});


app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});  