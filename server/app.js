import express from 'express';
import bodyParser from 'body-parser';
import winston from 'winston';
import session from 'express-session';
import router from './routes/index';

const port = process.env.PORT || 8081;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));

app.use(router.user);
app.use(router.recipe);
app.use(router.review);
app.use(router.favorite);
app.use(router.vote);

app.listen(port, () => winston.info('We up!'));

export default app;
