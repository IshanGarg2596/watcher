import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { productRouter } from './routers/productRouter';
import seedRouter from './routers/seedRouter';

dotenv.config();

//connecting to mongo db
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/watcher';
mongoose.set('strictQuery', true);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('connected to mongodb');
  })
  .catch((e) => {
    console.log(e);
  });

// app object
const app = express();

// setting up backend url
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173'],
  })
);

app.use('/api/products', productRouter);
app.use('/api/seed', seedRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
