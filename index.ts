import express from 'express'
import { pool } from './db';
import productRouter from './routes/products.routes';


const PORT = Bun.env.PORT || 8080;

const app = express();

app.use(express.json())
app.use('/api', productRouter)


// app.get('/user/', getUsers)
// app.get('/user/:id', getOneUser)
// app.put('/user', editUser)
// app.delete('/user', deleteUser)


app.listen(Number(PORT));

console.log(`Server is running on port ${PORT}`)