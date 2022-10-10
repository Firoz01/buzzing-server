import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import AuthRoute from './Routes/v1/AuthRoute.js';
import UserRoute from './Routes/v1/UserRoute.js';
import PostRoute from './Routes/v1/PostRoute.js';
import UploadRoute from './Routes/v1/UploadRoute.js';
import ChatRoute from './Routes/v1/ChatRoute.js';
import MessageRoute from './Routes/v1/MessageRoute.js';
//import AppError from './utils/appError.js';

//Routes
//Middleware


const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

//useage of route
app.use('/api/v1/auth', AuthRoute);
app.use('/api/v1/user', UserRoute);
app.use('/api/v1/posts', PostRoute);
app.use('/api/v1/upload', UploadRoute);
app.use('/api/v1/chat', ChatRoute);
app.use('/api/v1/message', MessageRoute);

// app.all('*', (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
// });

export default app;
