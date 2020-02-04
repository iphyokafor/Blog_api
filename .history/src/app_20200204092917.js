import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import postRoute from './routes/post_route.js';
import userRoute from './routes/user_route';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from '../docs/blog';
require('dotenv/config');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// mongodb connection string
mongoose.connect(
    process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('connected to db!'));
// .then(() => console.log('connected to db!'))
// .catch(err => {
//     console.log(`DB Connection Error: ${err.message}`);
// }));


app.use('/', postRoute);
app.use('/posts', postRoute);

app.use('/api', postRoute);

app.use('/api/auth', userRoute);
// app.get('/', (req, res, next) => {
//     res.send('Welcome to my Blog');
// });

const port = process.env.PORT || 5050;

app.listen(port, () => {
    console.log(`Server up and running on port ${port}`);
});

export default app;