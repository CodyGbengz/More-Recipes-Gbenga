import express from 'express';
import bodyParser from 'body-parser';
import winston from 'winston';
import session from 'express-session';
import routes from './routes/routes';

const port = process.env.PORT || 8081;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(routes);

app.listen(port, () => winston.info('We up!'));

export default app;
